import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_QUESTION = gql`
    mutation addQuestion($questionText: String) {
        addQuestion (questionText: $questionText) {
            _id
            questionText
            answers {
                _id
                answerBody
                createdAt
                vote
                username
            }
        }
    }
`;

export const ADD_ANSWER = gql`
    mutation addAnswer($questionId: ID!, $answerBody: String!) {
        addAnswer(questionId: $questionId, answerBody: $answerBody) {
            _id
            answerBody
            createdAt
            vote
            username
        }
    }
`;