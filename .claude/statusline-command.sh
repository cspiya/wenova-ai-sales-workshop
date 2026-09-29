#!/usr/bin/env bash
input=$(cat)

eval "$(echo "$input" | node -e '
  const d = JSON.parse(require("fs").readFileSync(0,"utf8"));
  console.log(`model="${d.model?.display_name || "?"}"`);
  console.log(`used="${d.context_window?.used_percentage ?? ""}"`);
  console.log(`cwd="${d.cwd || ""}"`);
')"

[ -z "$cwd" ] && cwd="$(pwd)"
dir=$(basename "$cwd")

UP=$'\xe2\x86\x91'
DN=$'\xe2\x86\x93'

git_dir=$(git -C "$cwd" rev-parse --git-dir 2>/dev/null)
if [ -n "$git_dir" ]; then
  case "$git_dir" in
    /*|?:*) git_dir_abs="$git_dir" ;;
    *)      git_dir_abs="$cwd/$git_dir" ;;
  esac
  git_common_dir=$(git -C "$cwd" rev-parse --git-common-dir 2>/dev/null)
  case "$git_common_dir" in
    /*|?:*) git_common_dir_abs="$git_common_dir" ;;
    *)      git_common_dir_abs="$cwd/$git_common_dir" ;;
  esac

  [ "$git_dir_abs" != "$git_common_dir_abs" ] && dir="${dir}[wt]"

  branch=$(git -C "$cwd" branch --show-current 2>/dev/null)
  if [ -z "$branch" ]; then
    sha=$(git -C "$cwd" rev-parse --short HEAD 2>/dev/null)
    branch="(detached@${sha})"
    detached=1
  else
    detached=0
  fi

  [ -n "$(git -C "$cwd" status --porcelain 2>/dev/null)" ] && branch="${branch}*"

  if [ "$detached" = "0" ]; then
    ab=$(git -C "$cwd" rev-list --left-right --count HEAD...@{upstream} 2>/dev/null)
    if [ -n "$ab" ]; then
      a=$(echo "$ab" | awk '{print $1}')
      b=$(echo "$ab" | awk '{print $2}')
      branch="${branch}/${UP}${a}${DN}${b}"
    else
      branch="${branch}/${UP}-${DN}-"
    fi
  fi

  if [ -f "$git_dir_abs/MERGE_HEAD" ]; then
    branch="${branch}|MERGING"
  elif [ -d "$git_dir_abs/rebase-merge" ] || [ -d "$git_dir_abs/rebase-apply" ]; then
    branch="${branch}|REBASING"
  elif [ -f "$git_dir_abs/CHERRY_PICK_HEAD" ]; then
    branch="${branch}|CHERRY-PICK"
  fi

  stash_count=$(git -C "$cwd" stash list 2>/dev/null | wc -l | tr -d ' ')
  if [ -n "$stash_count" ] && [ "$stash_count" != "0" ]; then
    branch="${branch}\$${stash_count}"
  fi
else
  branch="(no-git)"
fi

if [ -n "$used" ]; then
  u=$(printf "%.0f" "$used")
  f=$((u / 5))
  e=$((20 - f))
  bar=$(printf "%${f}s" | tr ' ' '#')$(printf "%${e}s" | tr ' ' '-')
  printf "\033[38;2;255;165;0m%s\033[0m@\033[36m%s\033[0m | \033[1m%s\033[0m [%s] %d%%" "$dir" "$branch" "$model" "$bar" "$u"
else
  printf "\033[38;2;255;165;0m%s\033[0m@\033[36m%s\033[0m | \033[1m%s\033[0m" "$dir" "$branch" "$model"
fi
