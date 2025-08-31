type ScrollResult = {
    internalIndex: number;
    needJump: boolean;
    jumpToIndex?: number;
}


function simulateScroll(banners: string[], scroll: number): ScrollResult {
    let bannerSize = banners.length;
    let bannerPointerIndex = 0;
    // every time scroll right, add 1 to banner pointer
    for(let i = 0; i < scroll; i++) {
        bannerPointerIndex = bannerPointerIndex % bannerSize;
        bannerPointerIndex++;
    }
    // if the pointer reach the last index, means it needs to jump to start.
    let ret: ScrollResult = {
        internalIndex: bannerPointerIndex + 1,
        needJump: false
    };
    ret.needJump = bannerPointerIndex == bannerSize;
    if(ret.needJump) {
        ret.jumpToIndex = 1;
    }
    return ret;
}


console.log(simulateScroll(["A", "B"], 0));

console.log(simulateScroll(["A", "B", "C"], 3));

console.log(simulateScroll(["A", "B", "C"], 4));
