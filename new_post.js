const { exec } = require('child_process');
const { program } = require('commander');
program.option('-t, --title <title>', 'Post title');

(() => {
  try {
    program.parse(process.argv);
    console.log("creating a new post...")
    if(!program.title) {
      console.log("New post title required");
      process.exit(1);
    }
  
    const date = new Date();
    const month = date.getMonth() + 1;
    const twoDigitMonth = month.toString().length < 2 ? `0${month.toString()}` : month;
    const day = date.getDate();
    const twoDigitDay = day.toString().length < 2 ? `0${day.toString()}` : day;
    const year = date.getFullYear();
  
    const titleForFile = program.title.toLowerCase();
    const titleSplit = titleForFile.split(' ').join('-');
  
    const markdownTitle = `${year}-${twoDigitMonth}-${twoDigitDay}-${titleSplit}.md`
  
    exec(`
cat <<EOF >./content/news/${year}/${markdownTitle}
---
title: ${program.title}
date: ${year}-${twoDigitMonth}-${twoDigitDay}
draft: true
---
    `, (err, stdout, stderr) => {
      if(err) {
        console.log(err);
        process.exit(1);
      }
  
      if(stderr) {
        console.log(stderr);
        process.exit(1);
      }
  
      console.log("New post created");
      process.exit(0);
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();