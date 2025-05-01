// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, CATEGORY_ENDPOINT } from '../../constants/temtem.constants';

/*
hard coded types to match the case of algeria only
and what should display in the section.
*/

type SousAppType = {
    _id: string;
    logo: string;
    name: string;
    customizations?: {
        color?: string;
    };
};

interface TemtemServicesResponse {
    message: string;
    data: {
        apps: {
            Algeria: {
                sousApps: SousAppType[];
            }
        }
    }
}

// Define a service using a base URL and expected endpoints
export const temtemServicesApi = createApi({
  reducerPath: 'temtemServicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTemtemServices: builder.query<SousAppType[], string>({
      query: (country) => CATEGORY_ENDPOINT + country,
      transformResponse: (response: TemtemServicesResponse) : SousAppType[] => {
        return response.data.apps.Algeria.sousApps.reduce((acc: SousAppType[], sousApp: SousAppType) => [...acc, {
            _id: sousApp._id,
            logo: sousApp.logo.replace('temtemone-prod.s3', 'temtemone-prod-fd.s3'),
            name: sousApp.name,
            customizations: {
                color: sousApp.customizations?.color,
            },
        }], []);
      },
    }),
  }),
});

// export const { useGetTemtemServicesQuery } = temtemServicesApi;
