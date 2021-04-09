import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
                friendCount
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
                friendCount
            }
        }
    }
`;

export const QUERY_USERS = gql`
    {
        users {
            _id
            username
            friendCount
            friends {
                _id
                username
                friendCount
            }
        }
    }
`;

export const QUERY_QUESTIONS = gql`
    {
        questions {
            _id
            questionText
            createdAt
            answers {
                answerBody
                createdAt
                vote
                username
            }
        }
    }
`;

export const QUERY_ANSWERS = gql`
    query answers($username: String!) {
        answers(username: $username) {
            answerBody
            createdAt
            vote
            username
        }
    }
`;