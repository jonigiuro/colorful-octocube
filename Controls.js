$(document).ready(function(){
var gui = new DAT.GUI({
    height : 2 * 32 - 1
});
gui.add(params, 'maxcubes').min(100).max(20000).step(10).name("Max Cubes")
gui.add(params, 'shrink').min(0.005).max(0.2).step(0.0025).name("1 / Trail length")
})