var terminal = document.getElementById("terminal");
var i = 0;
//#region  text variable setup
//'⠀' must be used instead of regular space character otherwise space will not be displayed
const text = ';Náš⠀první⠀program⠀-⠀Hello,⠀World!\n\n'+
'bits⠀16\n'+
'vorg⠀0x0100\n\n'+
'main:\n'+
'mov⠀ax,⠀cs\n'+
'mov⠀ds,⠀ax\n\n'+
'mov⠀si,⠀zprava\n'+
'call⠀print_string\n\n'+
'ret\n\n'+
'print_string:\n'+
'mov⠀ah,⠀0x0e\n'+
'xor⠀bh,⠀bh\n\n'+
'.print_char:\n'+
'lodsb\n'+
'or⠀al,⠀al\n'+
'jz⠀short⠀.return\n'+
'int⠀0x10\n'+
'jmp⠀short⠀.print_char\n\n'+
'.return:\n'+
'ret\n\n'+
'zprava⠀db⠀"Hello,⠀World!",⠀0x00\n\n'+
'flutter@isGood>⠀Hello,⠀World!';
//Assembly code source: https://www.itnetwork.cz/assembler/zaklady/assembler-prvni-program-hello-world
//#endregion
var interval = setInterval(main,10);

function main(){
    if(i < text.length){    //Check if the whole message was printed
        terminal.innerText += text[i];
        console.log(1);
        i++;
    }
    else clearInterval(interval);   //Quits the loop
}