// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 35,
        gold: 0,
        completed: {}
    };

    return user;
}

export default makeUser;