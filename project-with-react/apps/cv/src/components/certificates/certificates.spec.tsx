import { render } from '@testing-library/react';
const mockGetCertificatesByLanguage = jest.fn();
const mockUseTranslation = jest.fn();

jest.mock('@libs/data', () => ({
  getCertificatesByLanguage: (...args: unknown[]) =>
    mockGetCertificatesByLanguage(...args),
}));

jest.mock('@libs/shared', () => ({
  useTranslation: () => mockUseTranslation(),
}));

jest.mock('@libs/shared-ui', () => ({
  Certificate: ({ certificate }: { certificate: { name: string } }) => (
    <div>{certificate.name}</div>
  ),
}));

import Certificates from './certificates';

const certificatesMock = [
  {
    name: 'Mock Certificate',
    issueDate: '2024',
    issuingOrganization: 'Mock Org',
    description: 'Mock description',
  },
];

describe('Certificates', () => {
  beforeEach(() => {
    mockUseTranslation.mockReturnValue({ language: 'en' });
    mockGetCertificatesByLanguage.mockReturnValue(certificatesMock);
  });

  it('should render successfully', () => {
    const { baseElement, getByText } = render(<Certificates />);

    expect(baseElement).toBeTruthy();
    expect(getByText('Mock Certificate')).toBeTruthy();
    expect(mockGetCertificatesByLanguage).toHaveBeenCalledWith('en');
  });
});

