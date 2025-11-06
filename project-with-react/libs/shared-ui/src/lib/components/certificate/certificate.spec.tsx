import { render } from '@testing-library/react';
import Certificate from './certificate';

describe('Certificate', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <Certificate
        certificate={{
          name: 'Test Certificate',
          issueDate: '2024-01',
          issuingOrganization: 'Test Org',
          description: 'A descriptive summary of the certificate.',
        }}
      />,
    );

    expect(baseElement).toBeTruthy();
    expect(getByText('Test Certificate')).toBeInTheDocument();
    expect(getByText('Test Org')).toBeInTheDocument();
    expect(
      getByText(/A descriptive summary of the certificate./i),
    ).toBeInTheDocument();
  });
});

