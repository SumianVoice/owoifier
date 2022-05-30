

class owoifier {
  constructor() {
    this.owo = true;
  }
  owoify(text) {
    let output = text;
    // output = output.lowercase();
    // PUNCTUATION
    output = output.replace(/(\.)/gi, "")
    output = output.replace(/(\,)/gi, "")
    output = output.replace(/(\:)/gi, "")
    output = output.replace(/(\;)/gi, "")
    output = output.replace(/(\! )/gi, "!! ")
    output = output.replace(/(\!\!\! )/gi, "!! ") //
    output = output.replace(/(\? )/gi, "!? ")
    output = output.replace(/(\!\!\? )/gi, "!? ") //
    output = output.replace(/(\')/gi, "")
    // WORDS
    output = output.replace(/( you )/gi, " u ")
    output = output.replace(/( and )/gi, " en ")
    output = output.replace(/( be )/gi, " b ")
    output = output.replace(/( was )/gi, " wos ")
    output = output.replace(/( had )/gi, " habbed ")
    output = output.replace(/( yes )/gi, " ye ")
    output = output.replace(/(know)/gi, "no")
    output = output.replace(/(thought)/gi, "fowt")
    output = output.replace(/(though)/gi, "doe")
    output = output.replace(/(oh)/gi, "owo")
    // compounds
    output = output.replace(/(some)/gi, "sum")
    output = output.replace(/(haha)/gi, "hihi")
    output = output.replace(/(oin)/gi, "owin")
    output = output.replace(/(ght)/gi, "te")
    output = output.replace(/(ell)/gi, "ew")
    output = output.replace(/(all)/gi, "awl")
    output = output.replace(/(tio)/gi, "sho")
    output = output.replace(/(sur)/gi, "shor")
    output = output.replace(/(the)/gi, "da")
    output = output.replace(/(tha)/gi, "da")
    output = output.replace(/(thi)/gi, "di")
    output = output.replace(/(od)/gi, "awd")
    output = output.replace(/(ed )/gi, "d ")
    // output = output.replace(/(ow)/gi, "owo")
    output = output.replace(/(au)/gi, "aw")
    output = output.replace(/(se)/gi, "sw")
    output = output.replace(/(en)/gi, "ewn")
    output = output.replace(/(oth)/gi, "owf")
    output = output.replace(/(ith)/gi, "if")
    output = output.replace(/(uth)/gi, "uds")
    output = output.replace(/(eth)/gi, "ed")
    output = output.replace(/(uth)/gi, "uds")
    output = output.replace(/(ou)/gi, "auw")
    output = output.replace(/(wh)/gi, "w")
    output = output.replace(/(it)/gi, "iwt")
    output = output.replace(/(ge)/gi, "gwe")
    output = output.replace(/(ma)/gi, "mwa")
    output = output.replace(/(st)/gi, "stw")
    output = output.replace(/(stww)/gi, "stw") //
    output = output.replace(/(ck)/gi, "cc")
    output = output.replace(/(ip )/gi, "ipp ")
    output = output.replace(/(th)/gi, "s")
    output = output.replace(/(ol)/gi, "owl")
    // CONSONANTS
    output = output.replace(/(v)/gi, "bb")
    // output = output.replace(/(o )/gi, "owo ")
    // output = output.replace(/(owowo )/gi, "owo ") //
    output = output.replace(/(r)/gi, "w")
    output = output.replace(/(l)/gi, "w")
    output = output.replace(/(kn)/gi, "n")
    //
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    // output = output.replace(/(WORD)/gi, "")
    return output;
  }
}
