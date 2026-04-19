import { msg } from '../utils/constants';

export const invalidToken = {
  emptyToken: {
    testDescription: 'Access is forbidden with empty token',
    value: '',
    title: msg.INVALID_LINK,
  },

  invalidToken: {
    testDescription:
      'Application redirects to main SiteGround.com website with invalid token',
    value: 'testing',
    title: msg.SITE_TOOLS_TEXT,
  },

  malformedToken: {
    testDescription:
      'Application redirects to main SiteGround.com website with malformed token',
    value:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJmaXJzdF9uYW1lIjoiUSIsImxhc3RfbmFtZSI6IkEiLCJlbWFpbCI6InEuYUBkb21haW4uY29tIiwiZG9tYWluIjoiIiwibGFuZyI6ImVuIiwiZXhwIjoxOTcwMTI1MDc3Mn0MXA6ZIdl85XojUPStcz3JqyEct0bpKeOk_EEfOh7z7o',
    title: msg.SITE_TOOLS_TEXT,
  },
};
