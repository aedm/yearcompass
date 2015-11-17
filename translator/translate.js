"use strict";

var fs = require('fs');

function Translate(infile, outfile) {
  let readline = require('readline').createInterface({
    input: fs.createReadStream(infile)
  });

  let tokens = [];
  let text = "";
  let wasTextline = false;
  let result = {};

  function dump() {
    if (tokens.length == 0) return;
    tokens.forEach((token) => result[token] = text);
    tokens = [];
    text = "";
  }

  readline.on('line', (line) => {
    let isTextline = false;

    if (line.startsWith('#. Translators: ')) {
      tokens.push(line.split(' ').slice(-1)[0]);
    }
    else if (line.startsWith('msgstr')) {
      text += line.substr(line.indexOf('"')).replace(/^"(.*)"$/, '$1');
      isTextline = true;
    }
    else if (wasTextline && line.startsWith('"')) {
      text += line.replace(/^"(.*)"$/, '$1');
      isTextline = true;
    }

    if (wasTextline && !isTextline) dump();
    wasTextline = isTextline;
  });

  readline.on('close', () => {
    dump();
    let resultString = JSON.stringify(result, null, '\t');
    fs.writeFile(outfile, resultString, (err) => {
      if(err) return console.log(err);
      console.log(`'${infile}' was converted to '${outfile}'.`);
    });
  });
}

Translate('test.po', 'text.txt');
