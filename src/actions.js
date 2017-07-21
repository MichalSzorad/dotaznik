import history from './history';

export const changeLocation = url => {
    history.push(url);
};

export const sendQuestionnaireData = (data) => {
    console.log('sending data ...', data);
    changeLocation('/thank-you');
};