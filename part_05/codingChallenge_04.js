'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [firstPart, secondPart] = row.toLowerCase().trim().split('_');
    const correctForm = `${firstPart}${secondPart.replace(
      secondPart[0],
      secondPart[0].toUpperCase()
    )}`;
    console.log(`${correctForm.padEnd(20)}${'✅'.repeat(i + 1)}`);
    //padEnd(20)方法只给出了targetLength参数，意味着使用默认的空格进行填充，直到字符串长度达到20。然后，接着拼接上${'✅'.repeat(i + 1)}，这部分会重复'✅'图标(i+1)次。
  }
});
