$(document).ready(function(){
var gui = new DAT.GUI({
    height : 4 * 32 - 1
});
gui.add(params, 'posx').min(0).max(1000).step(1).name("PosX")
gui.add(params, 'posy').min(0).max(2000).step(1).name("PosY")
gui.add(params, 'posz').min(-1000).max(500).step(1).name("PosZ")
gui.add(params, 'cubes').min(0).max(.9).step(0.1).name("Cubes")
})