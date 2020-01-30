function hasCompletedAllQuizes(quizes, user) {
    // iterate through quests
    for (let i = 0; i < quizes.length; i++) {
        const quiz = quizes[i];
        // if any of the quizes is incomplete
        if (!user.completed[quiz.id]) {
            return false;
        }
    }

    // if all of the quizes are complete, we get this far and return true
    return true;
}

export default hasCompletedAllQuizes;