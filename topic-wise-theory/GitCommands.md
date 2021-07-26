# Github Basics

###### version control system / local and remote repo /revert back at any time to any version.
###### working area -> staging area -> repository

- set username => git config --global github.user Name
- set email => git config --global user.email Email
- set editor => git config --global core.editor "code --wait"
- git initilize => git init
- create file => touch filename.extension
- create file => echo 'text' > filename.extension
- check file => ls
- status => git status
- add file => git add . {for each file in repo}
- add file => git add index.html {for particular file in repo}
- commit file => git commit -m 'commit message'
- check log => git log
- check log though commit id => git show commiiid
- check code difference => git diff
	> git shows + for added and - for deleted
- revert last => git revert HEAD
	> In Git, there is one HEAD pointer that always points to the latest commit.
- check remote => git remote -v
- add origin remote => git remote add origin url.git
- if different then set => git remote set-url origin newurl
- push => git branch -M main -> git push -u origin branchname
- escape => :wq
- branch creation => git branch branchname
- select branch => git checkout branchname
- merge branch => git merge branchname
	> stay in working branch and branchname in command will be in which you are merging.
- branch deletion => git branch -D branchname
	> A branch can be deleted by providing –D option with git branch command. But before deleting the existing branch, switch to the other branch.
- remove file => git rm --catched filename.extension
- making new repo => mkdir newfoldername
- select new repo => cd newfoldername
- rename file or folder => git mv oldname newname
- git clone => git clone url.git
- git clone => git clone url.git foldername 
- git clone -b branchname --single-branch url.git
	> git clone is how you get a local copy of an existing repository to work on. It's usually only used once for a given repository, unless you want to have multiple working copies of it around. (Or want to get a clean copy after messing up your local one...)
- git pull 
	> git pull (or git fetch + git merge) is how you update that local copy with new commits from the remote repository. If you are collaborating with others, it is a command that you will run frequently.
- create lightweight tag => git tag v1.0-lw
- create lightweight show tag => git show v1.0-lw
- create annotated tag => git tag -a v1.0 -m "version 1.0"
- git annotated show tag => git show v1.0
- git stash => git stash ->git stash list -> git stash apply
	> Suppose you are implementing a new feature for your product. Your code is in progress and suddenly a customer escalation comes. Because of this, you have to keep aside your new feature work for a few hours. You cannot commit your partial code and also cannot throw away your changes. So you need some temporary space, where you can store your partial changes and later on commit it. In Git, the stash operation takes your modified tracked files, stages changes, and saves them on a stack of unfinished changes that you can reapply at any time.
- git rebase => 
	> The Git rebase command is a branch merge command, but the difference is that it modifies the order of commits.
	The Git merge command tries to put the commits from other branches on top of the HEAD of the current local branch. For example, your local branch has commits A−>B−>C−>D and the merge branch has commits A−>B−>X−>Y, then git merge will convert the current local branch to something like A−>B−>C−>D−>X−>Y



