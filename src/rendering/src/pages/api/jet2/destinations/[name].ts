import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs';
import gql from 'graphql-tag';
import { NextApiRequest, NextApiResponse } from 'next';
import config from 'temp/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  console.log('I am here ' + name);

  const graphQLClient = new GraphQLRequestClient(config.graphQLEndpoint, {
    apiKey: config.sitecoreApiKey,
  });

  const query = gql`
    query getDestinations($term: String!) {
      search (
        where: {
          AND: [
            {
              name: "_template"
            	value: "78efec838b3144fd86b52acb68405008"
            	operator: EQ  
            },
            {
              name: "_name"
            	value: $term
            	operator: CONTAINS  
            }
          ]
        }
    ) {
        total
        results {
          id
          name
          displayName
          path
          template {
            id
            name
          }
          url {
            path
          }
        }
      }
    }
  `
  
  const variables = {
    term: name
  };

  graphQLClient.request(query, variables).then((response) => {
    res.status(200).json(response);
  });
}
