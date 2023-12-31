function merge(left, right){
  
    var tab = [], l = 0, r = 0;

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            tab.push(left[l++]);
        } else {
            tab.push(right[r++]);
        }
    }
    return tab.concat(left.slice(l)).concat(right.slice(r));
}

function sort(tab){

    if (tab.length < 2) {
        return tab;
    }

    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, tab.length);
    tab.splice.apply(tab, p);
    return tab;
}

var tab = [5,3,87,1,-4,-99,0];
sort(tab);
document.write("Tab1 va donner: ","[",tab,"]<br>");