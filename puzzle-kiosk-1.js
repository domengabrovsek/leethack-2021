const input = `||||||||||I||1I||||I
||||||
|II
|||||
|||||||||||||
||||||
||!l||||1|||
||||!|I!||||l||!||
|||||||
||||||||
||||||||||||||
||||||||||||||||||
l|Il|!l|||||||!|||||
||||||||||||||||
||!|||
|
|||
||||||||||||||||||
||1|||||||||l|
||||||||||||
||||||||||||||
l|!|1|||
||
|||||||
|||||||
|||||||
|||
||||||
|||||||||||||||||||
||||||||||||||||||
|||||||||||||||
|||||||||||||||||
1l||||1|||||!||1|1|1
|||||||||||
|||||||||
|||
||||||
|||||||||||||||||||
1|||
|||||||||
|||I|l|I|I||ll|!||
|
1I!11||||I|!||
||||||||
l1I||||I1|!||||
||
||||||
||
|||||
||||1||l|!l|||
||||||||||||||||||||
||||||
|!|||||l|I||!1
|111||!l|l1|||!l||
|||||||||||||||||
|||||||||
||||
|||II||ll|||||
|||||||||||||
|||
||||!|I|I||1|||
|||||||||||||
||||||||||||||||||||
|||||||!I||1
|||||l||||Il|||
|I||!|l||I|!
|||||||||||||||||||
||||||||||||||
|||||||||
|||||
||||||||||||
|||||||||||||||||
||||!||||||1||||I
||||||||||||||||
|||||||||||||||
l|1||
|||I||||||||
||||||||||||
|||||||||||||
||||||||
||||||||||||
!l|I|||I|l|!
||
!|l
|||||||||||||||||
||
|||||||||||
|||||||||||
||||||||||
|||||||
||||
|||||||||||||||
I||||||I|l
||||||||||||||||
||||||||
||||||
|||||||||
|||||l1||||||
|!||II||||||!!|l
||||||||||||||||`



const lines = input.split('\n');

let count = 0;

lines.forEach(line => {
  if (line[0] === '|') {
    line.split('').forEach(pipe => {
      if (pipe === '|') count++
    })
  }
})

console.log(count)