function hasCompletedAllQuests(details, user) {
    // iterate through details
    for (let i = 0; i < details.length; i++) {
        const quest = details[i];
        // if any of the details is incomplete
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    // if all of the details are complete, we get this far and return true
    return true;
}

export default hasCompletedAllQuests;