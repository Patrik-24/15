function matOp(x = 4,y = 2) {
    console.log("Vypis prveho definovaneho cisla: "+x);
    console.log("Vypis druheho definovaneho cisla: "+y);

    console.log("Vykonávam matematické operácie");

    console.log("Sucet: " + x + "*+" + y + " = "+ (x+y));
    console.log("Rozdiel: " + x + "-" + y + " = "+ (x-y));
    console.log("Sucin: " + x + "*" + y + " = "+ (x*y));
    console.log("Podiel: " + x + "/" + y + " = "+ (x/y));
}
matOp();
console.log("--------------------")
console.log("DRUHA FUNKCIA")
console.log("--------------------")
matOp(x = 19, y = 15);