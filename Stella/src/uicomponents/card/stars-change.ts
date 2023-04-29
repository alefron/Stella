export interface StarsChangeModel {
    currentState: StarsModel;
    previousState: StarsModel;
}

export interface StarsModel {
    firstStar: boolean;
    secondStar: boolean;
    thirdStar: boolean;
}