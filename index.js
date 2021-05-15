


const input = "grubnehtog, elppaenip, amsiv, elppaenip, grubnehtog, evlove, neetriht, teel, elppaenip, neetriht, grubnehtog, grubnehtog, vrokulaf, neetriht, elppaenip, ylhtnom, sajnin, amsiv, hgrebmul, gnirahs, gnirahs, tnioperahs, egdelwonk, egdelwonk, elppaenip, teel, ylhtnom, ylhtnom, teel, grubnehtog, grubnehtog, sajnin, amsiv, elppaenip, grubnehtog, hgrebmul, vrokulaf, grubnehtog, neetriht, hgrebmul, teel, grubnehtog, elppaenip, ixat, sebirt, neetriht, neetriht, hgrebmul, teel, sajnin, tnioperahs, alletun, vrokulaf, egdelwonk, grubnehtog, hgrebmul, vrokulaf, evlove, vrokulaf, sebirt, evlove, vrokulaf, elppaenip, sebirt, neetriht, hgrebmul, ixat, teel, ixat, gnirahs, elppaenip, elppaenip, ixat, evlove, elppaenip, ixat, neetriht, elppaenip, evlove, alletun, sajnin, ixat, gnirahs, sebirt, teel, evlove, sajnin, ylhtnom, sebirt, alletun, ylhtnom, egdelwonk, ixat, neetriht, grubnehtog, neetriht, ixat, vrokulaf, grubnehtog, sajnin, elppaenip, ixat, hgrebmul, ixat, hgrebmul, egdelwonk, hgrebmul, egdelwonk, sajnin, teel, vrokulaf, vrokulaf, sebirt, elppaenip, ylhtnom, hgrebmul, sebirt, tnioperahs, hgrebmul, egdelwonk, evlove, sebirt, sajnin, egdelwonk, neetriht, egdelwonk, sebirt, amsiv, amsiv, egdelwonk, grubnehtog, egdelwonk, egdelwonk, sebirt, elppaenip, grubnehtog, amsiv, hgrebmul, egdelwonk, teel, ixat, hgrebmul, tnioperahs, evlove, vrokulaf, amsiv, hgrebmul, vrokulaf, elppaenip, teel, alletun, evlove, teel, ixat, vrokulaf, hgrebmul, ylhtnom, hgrebmul, tnioperahs, amsiv, hgrebmul, neetriht, alletun, hgrebmul, sebirt, teel, ixat, egdelwonk, elppaenip, teel, alletun, neetriht, evlove, neetriht, sajnin, vrokulaf, amsiv, amsiv, elppaenip, sebirt, ylhtnom, tnioperahs, alletun, amsiv, sajnin, hgrebmul, neetriht, neetriht, ixat, hgrebmul, sebirt, vrokulaf, elppaenip, evlove, elppaenip, elppaenip, amsiv, hgrebmul, grubnehtog, sajnin, evlove, gnirahs, sajnin, egdelwonk, alletun, sebirt, grubnehtog, teel, elppaenip, evlove, sajnin, gnirahs, egdelwonk, sajnin, tnioperahs, teel, elppaenip, ixat, evlove, ixat, gnirahs, ixat, vrokulaf, sajnin, grubnehtog, ixat, egdelwonk, ylhtnom, grubnehtog, ixat, elppaenip, neetriht, ylhtnom, hgrebmul, gnirahs, hgrebmul, hgrebmul, hgrebmul, hgrebmul, ylhtnom, ylhtnom, ixat, sajnin, alletun, sajnin, alletun, elppaenip, evlove, vrokulaf, amsiv";

const words = input.split(',')
  .map(word => word.trim())
  .map(word => word.split('').reverse().join(''))


const uniques = Array.from(new Set(words))




console.log(uniques)

