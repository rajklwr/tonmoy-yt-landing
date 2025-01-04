// components/Packages.js
import PackageBox from './PackageBox';
import UnderlineHeader from './UnderlineHeader';

const Packages = () => {
  const packagesData = [
    {
      logo: '/images/basic-logo.png',
      altText: 'Basic Package',
      title: 'Basic',
      price: '$70',
      description: 'Basic videos with original scripts, human voice-overs, and normal cuts and pastes, including background music.',
    },
    {
      logo: '/images/standard-logo.png',
      altText: 'Standard Package',
      title: 'Standard',
      price: '$85',
      description: 'Standard videos with engaging original scripts, human voice-overs, overlays, sound effects, and matching background music.',
    },
    {
      logo: '/images/premium-logo.png',
      altText: 'Premium Package',
      title: 'Premium',
      price: '$85',
      description: 'Super premium videos with highly engaging scripts, human voice-overs, animations, overlays, and sound effects for optimal success.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-orange-500 py-16 px-4 sm:px-8 overflow-x-hidden"
    style={{
      backgroundImage: 'url("/images/bg2.png")', // Ensure this is the correct path to your background
      backgroundAttachment: 'fixed', // Makes the background image stay fixed
    }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <UnderlineHeader title="PACKAGES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg, index) => (
            <PackageBox
              key={index}
              logo={pkg.logo}
              altText={pkg.altText}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
