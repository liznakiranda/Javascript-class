function classroom(){
    console.log(this.student+' wa '+this.parent)
}

let studentnumber1 = {
    student: 'liz',
    parent:'stella',
    print: classroom
}

let studentnumber2 = {
    student: 'dawu',
    parent: 'maria',
    print: classroom
}

studentnumber1.print();
studentnumber2.print();