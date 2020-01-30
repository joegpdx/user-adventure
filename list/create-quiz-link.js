function createQuizLink(quiz) {
    const link = document.createElement('a');
    link.classList.add('quiz');

    // const searchParams = new URLSearchParams();
    // searchParams.set('id', quiz.id);
    // link.href = 'quiz?' + searchParams.toString();
    link.href = '../quiz/?id=' + quiz.id;

    link.style.top = quiz.list.top;
    link.style.left = quiz.list.left;
    link.textContent = quiz.title;

    return link;
}

export default createQuizLink;