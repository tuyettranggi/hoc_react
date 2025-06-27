fa = fetch --all
	pl = pull --rebase
	ps = push
	ps0 = push --set-upstream origin test_ICD_LAB-$1
	psf0 = push -u origin HEAD
	psf = push --force-with-lease
	ma = checkout master
	dev = checkout develop
	st = status
	cls = !git reset --hard && git clean -fd
	ck = "!git checkout icd-lab/ICD_LAB-$1 #"
	ckf = "!git checkout icd-lab/ICD_LAB-$1 -- $2 #"
	ckt = "!git checkout test_ICD_LAB-$1 #"
	co = "!git checkout $1 #"
	cafe = config --global --edit
	cfAli = config --global alias
	cafeAli = config --global alias
	new = "!git checkout master && git fetch && git pull && git checkout -b icd-lab/ICD_LAB-$1 #"
	dev-new = "!git checkout develop && git fetch && git pull && git checkout -b test_ICD_LAB-$1 #"
	del = "!git branch -D icd-lab/ICD_LAB-$1 && git push origin --delete icd-lab/ICD_LAB-$1 #"
	dt-org = "!git branch -d test_ICD_LAB-$1 && git push origin --delete origin/test_ICD_LAB-$1 #"
	dt = "!git branch -D test_ICD_LAB-$1 #"
	d = "!git branch -D icd-lab/ICD_LAB-$1 #"
	pick = "!git cherry-pick $1 #"
	dl = "!git archive --output=$1.zip HEAD $(git diff-tree -r --no-commit-id --name-only --diff-filter=ACMRT $2 $3) #"
	lg = "!git log --graph --decorate --first-parent master..icd-lab/ICD_LAB-$1 --pretty=format:'%C(green reverse) %h %C(yellow reverse) %an %C(reset) %C(cyan) %s%C(reset) %as %C(blue)%ar' #"
	his = "!git log --graph --decorate --first-parent master..HEAD --pretty=format:'%C(green reverse) %h %C(reset) %an %C(yellow reverse) %s%C(reset) %as %C(blue)%ar' #"
	hist = "!git log --graph --decorate --first-parent develop..test_ICD_LAB-$1 --pretty=format:'%C(green reverse) %h %C(reset) %an %C(yellow reverse) %s%C(reset) %as %C(blue)%ar' #"
	s = "!git stash save $1 #"
	su = "!git stash save $1 -u #"
	deploy = "!git checkout develop && git fetch && git pull && git checkout -b test_ICD_LAB-$1 && git cherry-pick -x icd-lab/ICD_LAB-$1 && git push -u origin HEAD #"
	deploy2 = "!git checkout develop && git fetch && git pull && git checkout -b test_$1 && git cherry-pick -x $1 && git push -u origin HEAD #"
	deployd = "!git branch -d test_ICD_LAB-$1 && git checkout develop && git fetch && git pull && git checkout -b test_ICD_LAB-$1 && git cherry-pick -x icd-lab/ICD_LAB-$1 && git push -u origin HEAD #"
	cm-all = !git add -A && git commit -m
	cma = !git add -A && git commit -m
	list-gone = "!git branch -vv | grep ': gone]' | awk '{print $1}' #"
	rbm = "!git rebase master icd-lab/ICD_LAB-$1 #"
	rbd = "!git rebase develop test_ICD_LAB-$1 #"
	rb = "!git rebase -i HEAD~$1 #"
	msg = commit --amend
	tmp = "!git cherry-pick $(git rev-parse icd-lab/ICD_LAB-$1) #"
	pick-last = "!git cherry-pick icd-lab/ICD_LAB-$1~1 #"
	myworkflow = "!f() {\n  local_branch=$(git rev-parse --abbrev-ref HEAD);\n  base_branch=${local_branch#*/};\n  git checkout develop;\n  git fetch --all;\n  git pull;\n  git branch -D test_$base_branch;\n  git checkout -b test_$base_branch develop;\n  git cherry-pick $(git log -1 --format=%H $local_branch);\n  git push --set-upstream origin test_$base_branch;\n}; f"