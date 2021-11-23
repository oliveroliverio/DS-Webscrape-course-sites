#!/usr/bin/perl
open(IN, './out.txt');
open(OUT, ">temp4.txt");


# notes
# titleNum "div" class = gamut-ic76ur-Box ebnwbv90
# title1 "div" class = gamut-1efsrtw-Box ebnwbv90
# title2 "h4" class = gamut-nyxbiu-Text e8i0p5k0
# moduleType "p" class = gamut-1p9yzoy-Text e8i0p5k0
# moduleTitle "p" class = gamut-8ksv77-Text e8i0p5k0

$/ = '<h3 class="gamut-btgy85-Text e8i0p5k0">';
while(<IN>){
  ($thing) = $_ =~ /(<h3 class="gamut-btgy85-Text e8i0p5k0">\\n.+)/;
  print $thing;
}
