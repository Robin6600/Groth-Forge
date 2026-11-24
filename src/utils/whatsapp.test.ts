import test from 'node:test';
import assert from 'node:assert/strict';
import {
  WHATSAPP_NUMBER,
  DISPLAY_PHONE,
  buildDirectWhatsAppUrl,
  buildPackageWhatsAppMessage,
  buildPackageWhatsAppUrl,
  buildInquiryMessage,
  validateInquiryForm,
  filterProjects,
  type FilterableProject,
} from './whatsapp';

test('buildDirectWhatsAppUrl returns clean base link with 8801764713206 when no message is given', () => {
  assert.equal(WHATSAPP_NUMBER, '8801764713206');
  assert.equal(DISPLAY_PHONE, '01764713206');
  assert.equal(buildDirectWhatsAppUrl(), 'https://wa.me/8801764713206');
  assert.equal(buildDirectWhatsAppUrl('   '), 'https://wa.me/8801764713206');
});

test('buildPackageWhatsAppUrl encodes Bengali message with package name and price', () => {
  const url = buildPackageWhatsAppUrl('Growth Accelerator', '25,000 BDT/month');
  assert.ok(url.startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.ok(decoded.includes('Growth Accelerator'));
  assert.ok(decoded.includes('25,000 BDT/month'));
  assert.ok(decoded.includes('Groth Forge'));
  assert.equal(
    decoded,
    buildPackageWhatsAppMessage('Growth Accelerator', '25,000 BDT/month'),
  );
});

test('validateInquiryForm rejects empty business name and missing selections', () => {
  const invalid = validateInquiryForm({
    businessName: '   ',
    sector: '',
    packageName: '',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.businessName);
  assert.ok(invalid.errors.sector);
  assert.ok(invalid.errors.packageName);
});

test('validateInquiryForm rejects single-character business name', () => {
  const shortName = validateInquiryForm({
    businessName: 'A',
    sector: 'Real Estate',
    packageName: 'Foundation Growth (15,000 BDT/month)',
  });
  assert.equal(shortName.valid, false);
  assert.ok(shortName.errors.businessName);
});

test('validateInquiryForm accepts valid form values and formats Bengali WhatsApp message', () => {
  const input = {
    businessName: 'পাবনা মডার্ন ডায়াগনস্টিক',
    sector: 'Healthcare & Doctors Chambers',
    packageName: 'Growth Accelerator (25,000 BDT/month)',
    note: 'নতুন ব্রাঞ্চ লঞ্চ ক্যাম্পেইন',
  };
  const result = validateInquiryForm(input);
  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});

  const msg = buildInquiryMessage(input);
  assert.ok(msg.includes('পাবনা মডার্ন ডায়াগনস্টিক'));
  assert.ok(msg.includes('Healthcare & Doctors Chambers'));
  assert.ok(msg.includes('Growth Accelerator (25,000 BDT/month)'));
  assert.ok(msg.includes('নতুন ব্রাঞ্চ লঞ্চ ক্যাম্পেইন'));
});

test('filterProjects returns all items for All and filters exact category otherwise', () => {
  const sample: FilterableProject[] = [
    { id: '1', category: 'Corporate & Brand' },
    { id: '2', category: 'Real Estate' },
    { id: '3', category: 'Healthcare' },
    { id: '4', category: 'Retail & Education' },
    { id: '5', category: 'Corporate & Brand' },
  ];

  assert.equal(filterProjects(sample, 'All').length, 5);
  assert.equal(filterProjects(sample, 'Corporate & Brand').length, 2);
  assert.equal(filterProjects(sample, 'Real Estate').length, 1);
  assert.equal(filterProjects(sample, 'Healthcare')[0].id, '3');
  assert.equal(filterProjects(sample, 'Retail & Education')[0].id, '4');
});
