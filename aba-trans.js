 // This file was created by Anna Sorokina on 8.12.2018
   // It is based on similar convertion file by George Moroz (16.06.2017).
   // Conversion Type = Legacy_to_from_Unicode
   // TO DO: to add an option of omitting punctuation and stress + css maybe separate functions




function transliterate() {
  var input_text = document.getElementById("abaza_text").value;  
  var trans_sys = document.getElementById("trans_sys").value;  
  var stress = document.getElementById("stress").checked;
  var punct = document.getElementById("punct").checked;
  var tab = document.getElementById("tab").checked;
  
  if (stress == true) {input_text = input_text.toLowerCase()}
  if (tab == true) {input_text = tabulate(input_text)}
  if (punct == true) {input_text = rm_punct(input_text)}
  if (trans_sys == "fieldwork") {
	  var result_field = aba2field(input_text);    
	  document.getElementById("output").style.display = "block";
	  document.getElementById("tip").innerHTML = result_field;
  } else if (trans_sys == "ipa") {
		var result_ipa = aba2ipa(input_text);    
		document.getElementById("output").style.display = "block";
		document.getElementById("tip").innerHTML = result_ipa;
	}
  
}

document.getElementById("transliterate").onclick = function() {
  transliterate();
};



// from abaza cyrillic script to fieldwork notation
function aba2field(value) {

	// vowels and stress
	value = value.replace(/а/g,"a")
	value = value.replace(/А/g,"á")
	value = value.replace(/е/g,"aj")
	value = value.replace(/Е/g,"áj")
	value = value.replace(/и/g,"jəj")
	value = value.replace(/И/g,"jə́j")
	value = value.replace(/о/g,"aw")
	value = value.replace(/О/g,"áw")
	value = value.replace(/ы/g,"ə")
	value = value.replace(/Ы/g,"ə́")
	value = value.replace(/э/g,"e")
	value = value.replace(/Э/g,"é")
	value = value.replace(/ю/g,"ju")
	value = value.replace(/Ю/g,"jú")
	value = value.replace(/я/g,"ja")
	value = value.replace(/Я/g,"já")
	value = value.replace(/у/g,"w")
	value = value.replace(/У/g,"ə́w")
	
	value = value.toLowerCase()

	// convert triple consonants
	value = value.replace(/х1в/g,"hʷ")
	value = value.replace(/хів/g,"hʷ")
	value = value.replace(/хъв/g,"qʷ")
	value = value.replace(/хӏв/g,"hʷ")
	value = value.replace(/хiв/g,"hʷ")
	value = value.replace(/ч1в/g,"ĉ̣")
	value = value.replace(/чів/g,"ĉ̣")
	value = value.replace(/чӏв/g,"ĉ̣")
	value = value.replace(/чiв/g,"ĉ̣")
	value = value.replace(/г1в/g,"ʕʷ")
	value = value.replace(/гів/g,"ʕʷ")
	value = value.replace(/гъв/g,"ʁʷ")
	value = value.replace(/гъь/g,"ʁ’")
	value = value.replace(/гӏв/g,"ʕʷ")
	value = value.replace(/гiв/g,"ʕʷ")
	value = value.replace(/джв/g,"ʒ̂")
	value = value.replace(/джь/g,"̊ǯ’")
	value = value.replace(/к1в/g,"ḳʷ")
	value = value.replace(/к1ь/g,"ḳ’")
	value = value.replace(/ків/g,"ḳʷ")
	value = value.replace(/кіь/g,"ḳ’")	
	value = value.replace(/къв/g,"q̇ʷ")
	value = value.replace(/къь/g,"q̇’")
	value = value.replace(/кӏв/g,"ḳʷ")
	value = value.replace(/кӏь/g,"ḳ’")
	value = value.replace(/кiв/g,"ḳʷ")
	value = value.replace(/л1в/g,"λ̣")

	// convert double consonants
	value = value.replace(/г1/g,"ʕ")
	value = value.replace(/гі/g,"ʕ")
	value = value.replace(/гӏ/g,"ʕ")
	value = value.replace(/гi/g,"ʕ")
	value = value.replace(/гв/g,"gʷ")
	value = value.replace(/гъ/g,"ʁ")
	value = value.replace(/гь/g,"g’")
	value = value.replace(/дж/g,"ǯ")
	value = value.replace(/дз/g,"ʒ")
	value = value.replace(/жв/g,"ẑ")
	value = value.replace(/жь/g,"ž’")
	value = value.replace(/к1/g,"ḳ")
	value = value.replace(/кі/g,"ḳ")
	value = value.replace(/кӏ/g,"ḳ")
	value = value.replace(/кi/g,"ḳ")
	value = value.replace(/къ/g,"q̇")
	value = value.replace(/кь/g,"k’")
	value = value.replace(/кв/g,"kʷ")	
	value = value.replace(/т1/g,"ṭ")
	value = value.replace(/ті/g,"ṭ")
	value = value.replace(/тл/g,"λ")
	value = value.replace(/тш/g,"č")
	value = value.replace(/тӏ/g,"ṭ")
	value = value.replace(/тi/g,"ṭ")
	value = value.replace(/л1/g,"λ̣")
	value = value.replace(/лі/g,"λ̣")
	value = value.replace(/ль/g,"ɮ")
	value = value.replace(/лӏ/g,"λ̣")
	value = value.replace(/лi/g,"λ̣")
	value = value.replace(/п1/g,"ṗ")
	value = value.replace(/пӏ/g,"ṗ")
	value = value.replace(/пi/g,"ṗ")
	value = value.replace(/ф1/g,"ḟ")
	value = value.replace(/фі/g,"ḟ")
	value = value.replace(/фӏ/g,"ḟ")
	value = value.replace(/фi/g,"ḟ")
	value = value.replace(/х1/g,"h")
	value = value.replace(/хв/g,"χʷ")
	value = value.replace(/хі/g,"h")
	value = value.replace(/хъ/g,"q")
	value = value.replace(/хь/g,"χ’")
	value = value.replace(/хӏ/g,"h")
	value = value.replace(/хi/g,"h")
	value = value.replace(/ц1/g,"c̣")
	value = value.replace(/ці/g,"c̣")
	value = value.replace(/цӏ/g,"c̣")
	value = value.replace(/цi/g,"c̣")
	value = value.replace(/ч1/g,"č̣’")
	value = value.replace(/ч1/g,"č̣’")
	value = value.replace(/чв/g,"ĉ")
	value = value.replace(/чі/g,"č̣’")
	value = value.replace(/чӏ/g,"č̣’")
	value = value.replace(/чi/g,"č̣’")
	value = value.replace(/ш1/g,"č̣")
	value = value.replace(/шв/g,"ŝ")
	value = value.replace(/ші/g,"č̣")
	value = value.replace(/шӏ/g,"č̣")
	value = value.replace(/шi/g,"č̣")
	value = value.replace(/ъв/g,"ʔʷ")

	// convert consonants
	value = value.replace(/л/g,"l")
	value = value.replace(/м/g,"m")
	value = value.replace(/н/g,"n")
	value = value.replace(/п/g,"p")
	value = value.replace(/р/g,"r")
	value = value.replace(/с/g,"s")
	value = value.replace(/т/g,"t")
	value = value.replace(/ф/g,"f")
	value = value.replace(/ц/g,"c")
	value = value.replace(/ч/g,"č’")
	value = value.replace(/х/g,"χ")
	value = value.replace(/ш/g,"š")
	value = value.replace(/щ/g,"š’")
	value = value.replace(/ъ/g,"ʔ")
	value = value.replace(/б/g,"b")
	value = value.replace(/в/g,"v")
	value = value.replace(/г/g,"g")
	value = value.replace(/д/g,"d")
	value = value.replace(/ж/g,"ž")
	value = value.replace(/з/g,"z")
	value = value.replace(/й/g,"j")
	value = value.replace(/к/g,"k")
	value = value.replace(/˘/g,"")

	return value
}


// from abaza cyrillic script to ipa notation
function aba2ipa(value) {

	// vowels and stress
	value = value.replace(/а/g,"a")
	value = value.replace(/А/g,"á")
	value = value.replace(/е/g,"aj")
	value = value.replace(/Е/g,"áj")
	value = value.replace(/и/g,"jəj")
	value = value.replace(/И/g,"jə́j")
	value = value.replace(/о/g,"aw")
	value = value.replace(/О/g,"áw")
	value = value.replace(/ы/g,"ə")
	value = value.replace(/Ы/g,"ə́")
	value = value.replace(/э/g,"e")
	value = value.replace(/Э/g,"é")
	value = value.replace(/ю/g,"ju")
	value = value.replace(/Ю/g,"jú")
	value = value.replace(/я/g,"ja")
	value = value.replace(/Я/g,"já")
	value = value.replace(/у/g,"w")
	value = value.replace(/У/g,"ə́w")
	
	value = value.toLowerCase()

	// convert triple consonants
	value = value.replace(/х1в/g,"ħʷ")
	value = value.replace(/хів/g,"ħʷ")
	value = value.replace(/хӏв/g,"ħʷ")
	value = value.replace(/хiв/g,"ħʷ")
	value = value.replace(/хъв/g,"qʷ")
	value = value.replace(/ч1в/g,"tʃ’")
	value = value.replace(/чів/g,"tʃ’")
	value = value.replace(/чӏв/g,"tʃ’")
	value = value.replace(/чiв/g,"tʃ’")
	value = value.replace(/г1в/g,"ʕʷ")
	value = value.replace(/гів/g,"ʕʷ")
	value = value.replace(/гӏв/g,"ʕʷ")
	value = value.replace(/гiв/g,"ʕʷ")
	value = value.replace(/гъв/g,"ʁʷ")
	value = value.replace(/гъь/g,"ʁ’")
	value = value.replace(/джв/g,"dʒ")
	value = value.replace(/джь/g,"d͡ʑ")
	value = value.replace(/к1в/g,"k’ʷ")	
	value = value.replace(/ків/g,"k’ʷ")
	value = value.replace(/кӏв/g,"k’ʷ")	
	value = value.replace(/кiв/g,"k’ʷ")
	value = value.replace(/к1ь/g,"k’ʲ")
	value = value.replace(/кӏь/g,"k’ʲ")
	value = value.replace(/кіь/g,"k’ʲ")	
	value = value.replace(/къв/g,"q’ʷ")
	value = value.replace(/къь/g,"q’ʲ")

	// convert double consonants
	value = value.replace(/г1/g,"ʕ")
	value = value.replace(/гі/g,"ʕ")
	value = value.replace(/гӏ/g,"ʕ")
	value = value.replace(/гi/g,"ʕ")
	value = value.replace(/гв/g,"gʷ")
	value = value.replace(/гъ/g,"ʁ")
	value = value.replace(/гь/g,"ɡʲ")
	value = value.replace(/дж/g,"d͡ʒ")
	value = value.replace(/дз/g,"dʒ")
	value = value.replace(/жв/g,"ʒ")
	value = value.replace(/жь/g,"ʑ")
	value = value.replace(/к1/g,"k’")
	value = value.replace(/кі/g,"k’")
	value = value.replace(/кӏ/g,"k’")
	value = value.replace(/кi/g,"k’")
	value = value.replace(/къ/g,"q’")
	value = value.replace(/кь/g,"kʲ")
	value = value.replace(/кв/g,"kʷ")	
	value = value.replace(/т1/g,"t’")
	value = value.replace(/ті/g, "t’")
	value = value.replace(/тл/g,"ɬ")
	value = value.replace(/тш/g,"t͡ʃ")
	value = value.replace(/тӏ/g, "t’")
	value = value.replace(/тi/g, "t’")
	value = value.replace(/л1/g,"ɬ̣")
	value = value.replace(/лі/g,"ɬ̣")
	value = value.replace(/ль/g,"ɮ")
	value = value.replace(/лӏ/g,"ɬ̣")
	value = value.replace(/лi/g,"ɬ̣")
	value = value.replace(/п1/g,"p’")
	value = value.replace(/пӏ/g,"p’")
	value = value.replace(/пi/g,"p’")
	value = value.replace(/ф1/g,"f’")
	value = value.replace(/фі/g,"f’")
	value = value.replace(/фӏ/g,"f’")
	value = value.replace(/фi/g,"f’")
	value = value.replace(/х1/g,"ħ")
	value = value.replace(/хв/g,"χʷ")
	value = value.replace(/хі/g,"ħ")
	value = value.replace(/хъ/g,"q")
	value = value.replace(/хь/g,"χʲ")
	value = value.replace(/хӏ/g,"ħ")
	value = value.replace(/хi/g,"ħ")
	value = value.replace(/ц1/g,"t͡s’")
	value = value.replace(/ці/g,"t͡s’")
	value = value.replace(/цӏ/g,"t͡s’")
	value = value.replace(/цi/g,"t͡s’")
	value = value.replace(/ч1/g,"t͡ɕ’")
	value = value.replace(/ч1/g,"t͡ɕ’")
	value = value.replace(/чв/g,"tʃ")
	value = value.replace(/чі/g,"t͡ɕ’")
	value = value.replace(/чӏ/g,"t͡ɕ’")
	value = value.replace(/чi/g,"t͡ɕ’")
	value = value.replace(/ш1/g,"t͡ʃ’")
	value = value.replace(/шв/g,"ʃ")
	value = value.replace(/ші/g,"t͡ʃ’")
	value = value.replace(/шӏ/g,"t͡ʃ’")
	value = value.replace(/шi/g,"t͡ʃ’")
	value = value.replace(/ъв/g,"ʔʷ")

	// convert consonants
	value = value.replace(/л/g,"l")
	value = value.replace(/м/g,"m")
	value = value.replace(/н/g,"n")
	value = value.replace(/п/g,"p")
	value = value.replace(/р/g,"r")
	value = value.replace(/с/g,"s")
	value = value.replace(/т/g,"t")
	value = value.replace(/ф/g,"f")
	value = value.replace(/ц/g,"t͡s")
	value = value.replace(/ч/g,"t͡ɕ")
	value = value.replace(/х/g,"χ")
	value = value.replace(/ш/g,"ʃ")
	value = value.replace(/щ/g,"ɕ")
	value = value.replace(/ъ/g,"ʔ")
	value = value.replace(/б/g,"b")
	value = value.replace(/в/g,"v")
	value = value.replace(/г/g,"g")
	value = value.replace(/д/g,"d")
	value = value.replace(/ж/g,"ʒ")
	value = value.replace(/з/g,"z")
	value = value.replace(/й/g,"j")
	value = value.replace(/к/g,"k")
	value = value.replace(/◌̆/g,"")

	return value
}


// punctuation
function rm_punct(value) {
	value = value.replace(/[!"@#$%^/\&_='*+,.:;<>?\\{}|~—]/g,"")
  return value
}

// tabs
function tabulate(value) {
	value = value.replace(/\s/g,"	")
  return value
}


