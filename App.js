import React, { useState } from 'react';
import { Home as HomeIcon, Map, LayoutGrid, Building, Upload, Search, Bell, User, ChevronDown, ToggleRight, Sliders, MapPin, CheckCircle, XCircle, Users, Compass, Car, Zap, DollarSign, Target, Globe, BookOpen, Lightbulb, TrendingUp, Cpu, LocateFixed } from 'lucide-react';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to determine the active icon style in the navigation bar
  const getIconStyle = (pageName) => ({
    color: currentPage === pageName ? '#4f46e5' : '#6b7280', // text-indigo-600 : text-gray-500
    transition: 'color 0.2s ease-in-out',
  });

  // Render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'marketMap':
        return <MarketMap />;
      case 'segmentation':
        return <Segmentation />;
      case 'siteSuitability':
        return <SiteSuitability />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px', // p-4
      backgroundColor: '#f3f4f6', // bg-gray-100
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '448px', // max-w-md
        backgroundColor: '#fff', // bg-white
        borderRadius: '24px', // rounded-3xl
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-xl
        overflow: 'hidden',
        minHeight: '80vh', // min-h-[80vh]
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Page Content */}
        <div style={{
          flexGrow: 1, // flex-grow
          overflowY: 'auto', // overflow-y: auto;
          paddingBottom: '80px', // pb-20 to prevent content from being hidden by nav bar
        }}>
          {renderPage()}
        </div>

        {/* Bottom Navigation Bar */}
        <nav style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff', // bg-white
          borderTop: '1px solid #e5e7eb', // border-t border-gray-200
          borderBottomLeftRadius: '24px', // rounded-b-3xl
          borderBottomRightRadius: '24px',
          boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-lg
        }}>
          <ul style={{
            display: 'flex', // flex
            justifyContent: 'space-around', // justify-around
            alignItems: 'center', // items-center
            padding: '12px 0', // py-3
            listStyle: 'none', // Remove default list style
            margin: 0, // Remove default list margin
          }}>
            <li style={{
              display: 'flex', // flex
              flexDirection: 'column', // flex-col
              alignItems: 'center', // items-center
              cursor: 'pointer', // cursor-pointer
              ...getIconStyle('home')
            }} onClick={() => setCurrentPage('home')}>
              <HomeIcon size={24} />
              <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>Home</span>
            </li>
            <li style={{
              display: 'flex', // flex
              flexDirection: 'column', // flex-col
              alignItems: 'center', // items-center
              cursor: 'pointer', // cursor-pointer
              ...getIconStyle('marketMap')
            }} onClick={() => setCurrentPage('marketMap')}>
              <Map size={24} />
              <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>Market Map</span>
            </li>
            <li style={{
              display: 'flex', // flex
              flexDirection: 'column', // flex-col
              alignItems: 'center', // items-center
              cursor: 'pointer', // cursor-pointer
              ...getIconStyle('segmentation')
            }} onClick={() => setCurrentPage('segmentation')}>
              <LayoutGrid size={24} />
              <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>Segmentation</span>
            </li>
            <li style={{
              display: 'flex', // flex
              flexDirection: 'column', // flex-col
              alignItems: 'center', // items-center
              cursor: 'pointer', // cursor-pointer
              ...getIconStyle('siteSuitability')
            }} onClick={() => setCurrentPage('siteSuitability')}>
              <Building size={24} />
              <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>Site Suitability</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// Home Screen Component
function Home({ setCurrentPage }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header Section */}
      <div style={{
        position: 'relative',
        height: '192px', // h-48
        background: 'linear-gradient(to right, #6b21a8, #4f46e5)', // bg-gradient-to-r from-purple-700 to-indigo-700
        color: '#fff', // text-white
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: '16px', // rounded-b-2xl
        borderBottomRightRadius: '16px',
        overflow: 'hidden',
      }}>
        {/* Background image/pattern - simplified for code */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://placehold.co/600x400/3f51b5/ffffff?text=Map+Background")',
          backgroundSize: 'cover', // bg-cover
          backgroundPosition: 'center', // bg-center
          opacity: 0.3, // opacity-30
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center', // text-center
          padding: '16px', // p-4
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome to GeoBrand Strategist</h1>
          <p style={{ fontSize: '0.875rem', marginTop: '8px', opacity: 0.8 }}>Unlock market insights and optimize brand deployment with data-driven decisions.</p>
        </div>
      </div>

      <div style={{ padding: '20px', flexGrow: 1 }}>
        {/* Quick Actions Section */}
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{
          display: 'grid', // grid
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // grid-cols-2
          gap: '16px', // gap-4
          marginBottom: '32px', // mb-8
        }}>
          <QuickActionCard icon={<Map size={24} />} title="View Market Map" description="Explore demographic & competitor data" onClick={() => setCurrentPage('marketMap')} />
          <QuickActionCard icon={<LayoutGrid size={24} />} title="Run Segmentation" description="Segment markets by diverse criteria" onClick={() => setCurrentPage('segmentation')} />
          <QuickActionCard icon={<Building size={24} />} title="Analyze Site Suitability" description="Score locations for optimal fit" onClick={() => setCurrentPage('siteSuitability')} />
          <QuickActionCard icon={<Building size={24} />} title="Plan Brand Deployment" description="Strategize new market entries" />
        </div>

        {/* Latest Insights Section */}
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Latest Insights</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InsightCard
            image="https://placehold.co/100x70/E0E7FF/4338CA?text=Market"
            title="Q3 Market Trends: Rise of Urban Micro-Hubs"
            description="An in-depth analysis of emerging urban retail patterns and their implications for..."
            time="2 days ago"
          />
          <InsightCard
            image="https://placehold.co/100x70/E0E7FF/4338CA?text=AI"
            title="Leveraging AI in Location Intelligence"
            description="How artificial intelligence is transforming site selection and market analysis,"
            time="1 week ago"
          />
        </div>

        {/* Our Partners Section */}
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginTop: '32px', marginBottom: '16px' }}>Our Partners</h2>
        <div style={{
          display: 'flex', // flex
          justifyContent: 'space-around', // justify-around
          alignItems: 'center', // items-center
          gap: '16px', // space-x-4
          marginBottom: '16px', // mb-4
        }}>
          <img src="https://placehold.co/50x50/F3E8FF/7C3AED?text=P1" alt="Partner 1" style={{ width: '48px', height: '48px', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} />
          <img src="https://placehold.co/50x50/E0F2FE/3B82F6?text=P2" alt="Partner 2" style={{ width: '48px', height: '48px', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} />
          <img src="https://placehold.co/50x50/D1FAE5/10B981?text=P3" alt="Partner 3" style={{ width: '48px', height: '48px', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} />
          <img src="https://placehold.co/50x50/FFE4E6/EF4444?text=P4" alt="Partner 4" style={{ width: '48px', height: '48px', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} />
          <img src="https://placehold.co/50x50/FFFBEB/F59E0B?text=P5" alt="Partner 5" style={{ width: '48px', height: '48px', borderRadius: '9999px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} />
        </div>
      </div>
    </div>
  );
}

// Quick Action Card Component
const QuickActionCard = ({ icon, title, description, onClick }) => (
  <div
    style={{
      backgroundColor: '#f9fafb', // bg-gray-50
      padding: '16px', // p-4
      borderRadius: '12px', // rounded-xl
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
      display: 'flex', // flex
      flexDirection: 'column', // flex-col
      alignItems: 'flex-start', // items-start
      cursor: 'pointer', // cursor-pointer
      transition: 'background-color 0.2s ease-in-out',
    }}
    onClick={onClick}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} // hover:bg-gray-100
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
  >
    <div style={{
      padding: '8px', // p-2
      backgroundColor: '#e0e7ff', // bg-indigo-100
      borderRadius: '8px', // rounded-lg
      color: '#4f46e5', // text-indigo-600
      marginBottom: '8px', // mb-2
    }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{title}</h3>
    <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{description}</p>
  </div>
);

// Insight Card Component
const InsightCard = ({ image, title, description, time }) => (
  <div style={{
    display: 'flex', // flex
    alignItems: 'center', // items-center
    backgroundColor: '#f9fafb', // bg-gray-50
    padding: '16px', // p-4
    borderRadius: '12px', // rounded-xl
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
  }}>
    <img src={image} alt={title} style={{ width: '80px', height: '64px', objectFit: 'cover', borderRadius: '8px', marginRight: '16px' }} />
    <div style={{ flexGrow: 1 }}>
      <h3 style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{title}</h3>
      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '4px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{description}</p>
      <div style={{
        display: 'flex', // flex
        justifyContent: 'space-between', // justify-between
        alignItems: 'center', // items-center
        fontSize: '0.75rem', // text-xs
        color: '#9ca3af', // text-gray-400
        marginTop: '8px', // mt-2
      }}>
        <span>{time}</span>
        <a href="#" style={{ color: '#4f46e5', fontWeight: 500, textDecoration: 'none' }}>Read More</a>
      </div>
    </div>
  </div>
);

// Market Map Screen Component
function MarketMap() {
  const [layers, setLayers] = useState({
    demographics: true,
    competitorLocations: true,
    trafficZones: false,
    salesHotspots: true,
  });

  const handleToggle = (layer) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex', // flex
        alignItems: 'center', // items-center
        justifyContent: 'space-between', // justify-between
        padding: '20px', // p-5
        paddingBottom: '12px', // pb-3
        borderBottom: '1px solid #e5e7eb', // border-b border-gray-200
      }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1f2937' }}>Market Map</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Bell size={20} style={{ color: '#6b7280' }} />
          <div style={{ width: '32px', height: '32px', backgroundColor: '#e0e7ff', color: '#4f46e5', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>JD</div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ padding: '20px', paddingTop: '12px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            type="text"
            placeholder="Search locations or data..."
            style={{
              width: '100%',
              paddingLeft: '40px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '12px',
              outline: 'none',
              boxShadow: '0 0 0 2px transparent',
              transition: 'box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#4f46e5';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.5)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = '0 0 0 2px transparent';
            }}
          />
        </div>
      </div>

      {/* Map Placeholder */}
      <div style={{ flexGrow: 1, backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src="https://placehold.co/400x300/E0E7FF/4338CA?text=Interactive+Map" alt="Map Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {/* Mock location pin */}
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          backgroundColor: '#fff',
          padding: '8px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <MapPin size={16} style={{ color: '#4f46e5' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1f2937' }}>Global Corp HQ</span>
          <ChevronDown size={16} style={{ color: '#9ca3af', transform: 'rotate(90deg)' }} />
        </div>
        {/* Mock growth indicator */}
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          borderRadius: '9999px',
          padding: '8px',
          fontSize: '0.75rem',
          fontWeight: 'bold',
        }}>
          +25%
        </div>
      </div>

      {/* Map Layers Section */}
      <div style={{
        padding: '20px',
        backgroundColor: '#fff',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Map Layers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <MapLayerItem icon={<Users size={20} />} title="Demographics" isToggled={layers.demographics} onToggle={() => handleToggle('demographics')} />
          <MapLayerItem icon={<MapPin size={20} />} title="Competitor Locations" isToggled={layers.competitorLocations} onToggle={() => handleToggle('competitorLocations')} />
          <MapLayerItem icon={<Car size={20} />} title="Traffic Zones" isToggled={layers.trafficZones} onToggle={() => handleToggle('trafficZones')} />
          <MapLayerItem icon={<DollarSign size={20} />} title="Sales Hotspots" isToggled={layers.salesHotspots} onToggle={() => handleToggle('salesHotspots')} />
        </div>
      </div>
    </div>
  );
}

// Map Layer Item Component
const MapLayerItem = ({ icon, title, isToggled, onToggle }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ padding: '8px', backgroundColor: '#f3f4f6', borderRadius: '8px', color: '#4b5563' }}>
        {icon}
      </div>
      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1f2937' }}>{title}</span>
    </div>
    <ToggleSwitch isToggled={isToggled} onToggle={onToggle} />
  </div>
);

// Segmentation Screen Component
function Segmentation() {
  const [ageDemographics, setAgeDemographics] = useState('');
  const [householdIncome, setHouseholdIncome] = useState('');
  const [purchaseBehavior, setPurchaseBehavior] = useState('');
  const [segmentationAlgorithm, setSegmentationAlgorithm] = useState('k-means');

  const handleFileUpload = () => {
    alert('File upload initiated (mock action)');
  };

  const handleRunSegmentation = () => {
    alert('Running segmentation with selected criteria (mock action)');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        paddingBottom: '12px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1f2937' }}>Segmentation</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ChevronDown size={20} style={{ color: '#6b7280', transform: 'rotate(90deg)' }} /> {/* Placeholder for back arrow if needed */}
          <div style={{ width: '32px', height: '32px', backgroundColor: '#e0e7ff', color: '#4f46e5', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>JD</div>
        </div>
      </div>

      <div style={{ padding: '20px', flexGrow: 1, overflowY: 'auto' }}>
        {/* Upload Market Data */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Upload size={20} style={{ color: '#4f46e5' }} />
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937' }}>Upload Market Data</h2>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '16px' }}>
            Securely upload your CSV or Excel files to begin segmenting your customer base or market. Data privacy is our top priority.
          </p>
          <button
            onClick={handleFileUpload}
            style={{
              width: '100%',
              backgroundColor: '#4f46e5',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
          >
            Upload File
          </button>
        </div>

        {/* Define Segmentation Criteria */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Define Segmentation Criteria</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Dropdown
              label="Age Demographics"
              options={['25-45 Years', '18-24 Years', '46-65 Years', '65+ Years']}
              value={ageDemographics}
              onChange={(e) => setAgeDemographics(e.target.value)}
            />
            <Dropdown
              label="Household Income"
              options={['50K-100K USD', 'Less than 50K USD', '100K-200K USD', '200K+ USD']}
              value={householdIncome}
              onChange={(e) => setHouseholdIncome(e.target.value)}
            />
            <Dropdown
              label="Purchase Behavior"
              options={['Frequent Online Shopper', 'Occasional Online Shopper', 'In-store Only', 'New Customer']}
              value={purchaseBehavior}
              onChange={(e) => setPurchaseBehavior(e.target.value)}
            />
          </div>
        </div>

        {/* Select Segmentation Algorithm */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Select Segmentation Algorithm</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton
              id="k-means"
              name="algorithm"
              value="k-means"
              label="K-Means Clustering"
              description="Identifies k distinct clusters based on feature similarity."
              checked={segmentationAlgorithm === 'k-means'}
              onChange={(e) => setSegmentationAlgorithm(e.target.value)}
            />
            <RadioButton
              id="dbscan"
              name="algorithm"
              value="dbscan"
              label="DBSCAN"
              description="Identifies clusters of varying shapes and densities in data."
              checked={segmentationAlgorithm === 'dbscan'}
              onChange={(e) => setSegmentationAlgorithm(e.target.value)}
            />
            <RadioButton
              id="hierarchical"
              name="algorithm"
              value="hierarchical"
              label="Hierarchical Clustering"
              description="Builds a hierarchy of clusters, either agglomerative or divisive."
              checked={segmentationAlgorithm === 'hierarchical'}
              onChange={(e) => setSegmentationAlgorithm(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleRunSegmentation}
          style={{
            width: '100%',
            backgroundColor: '#4f46e5',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '12px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            marginBottom: '24px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          Run Segmentation
        </button>

        {/* Segmentation Results Preview */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Segmentation Results Preview</h2>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '16px' }}>
            Visualizing colored clusters based on selected criteria and algorithm. This area will dynamically
            update upon running segmentation.
          </p>
          <div style={{
            height: '192px',
            backgroundColor: '#e5e7eb',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            textAlign: 'center',
            padding: '16px',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Globe size={48} style={{ marginBottom: '8px' }} />
              <span>Segmentation results will be visualized here as interactive clusters on a map.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dropdown Component
const Dropdown = ({ label, options, value, onChange }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>{label}</label>
    <select
      style={{
        display: 'block',
        width: '100%',
        padding: '8px 40px 8px 12px',
        fontSize: '1rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        outline: 'none',
        transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      }}
      value={value}
      onChange={onChange}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = '#4f46e5';
        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.5)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#d1d5db';
        e.currentTarget.style.boxShadow = '0 0 0 2px transparent';
      }}
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// Radio Button Component
const RadioButton = ({ id, name, value, label, description, checked, onChange }) => (
  <label htmlFor={id} style={{
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    padding: '12px',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease-in-out',
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
  >
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      style={{
        marginTop: '4px',
        height: '16px',
        width: '16px',
        color: '#4f46e5',
        border: '1px solid #d1d5db',
        outline: 'none',
        cursor: 'pointer',
      }}
    />
    <div style={{ marginLeft: '12px' }}>
      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{label}</span>
      <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{description}</p>
    </div>
  </label>
);

// Site Suitability Screen Component
function SiteSuitability() {
  const [criteria, setCriteria] = useState({
    populationDensity: { enabled: true, weight: 80 },
    demographicsFit: { enabled: true, weight: 75 },
    accessibility: { enabled: true, weight: 90 },
    competitorProximity: { enabled: true, weight: 60 },
    infrastructure: { enabled: true, weight: 85 },
  });
  const [targetLocation, setTargetLocation] = useState('123 Main St, Anytown, USA');

  const handleToggleCriteria = (key) => {
    setCriteria((prev) => ({
      ...prev,
      [key]: { ...prev[key], enabled: !prev[key].enabled },
    }));
  };

  const handleWeightChange = (key, value) => {
    setCriteria((prev) => ({
      ...prev,
      [key]: { ...prev[key], weight: parseInt(value, 10) },
    }));
  };

  const handleAnalyzeSuitability = () => {
    // Simulate analysis
    alert('Analyzing suitability for the given criteria (mock action)');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        paddingBottom: '12px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1f2937' }}>Site Suitability</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Bell size={20} style={{ color: '#6b7280' }} />
          <div style={{ width: '32px', height: '32px', backgroundColor: '#e0e7ff', color: '#4f46e5', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.875rem' }}>JS</div>
        </div>
      </div>

      <div style={{ padding: '20px', flexGrow: 1, overflowY: 'auto' }}>
        {/* Analysis Criteria */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Analysis Criteria</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <CriteriaItem
              icon={<Users size={20} />}
              title="Population Density"
              description="Concentration of potential customers in the surrounding area."
              isToggled={criteria.populationDensity.enabled}
              onToggle={() => handleToggleCriteria('populationDensity')}
              weight={criteria.populationDensity.weight}
              onWeightChange={(e) => handleWeightChange('populationDensity', e.target.value)}
            />
            <CriteriaItem
              icon={<Target size={20} />}
              title="Demographics Fit"
              description="Alignment with target age, income, and lifestyle segments."
              isToggled={criteria.demographicsFit.enabled}
              onToggle={() => handleToggleCriteria('demographicsFit')}
              weight={criteria.demographicsFit.weight}
              onWeightChange={(e) => handleWeightChange('demographicsFit', e.target.value)}
            />
            <CriteriaItem
              icon={<Car size={20} />}
              title="Accessibility"
              description="Ease of access by road, public transport, and foot traffic."
              isToggled={criteria.accessibility.enabled}
              onToggle={() => handleToggleCriteria('accessibility')}
              weight={criteria.accessibility.weight}
              onWeightChange={(e) => handleWeightChange('accessibility', e.target.value)}
            />
            <CriteriaItem
              icon={<Compass size={20} />}
              title="Competitor Proximity"
              description="Distance and concentration of direct and indirect competitors."
              isToggled={criteria.competitorProximity.enabled}
              onToggle={() => handleToggleCriteria('competitorProximity')}
              weight={criteria.competitorProximity.weight}
              onWeightChange={(e) => handleWeightChange('competitorProximity', e.target.value)}
            />
            <CriteriaItem
              icon={<Zap size={20} />}
              title="Infrastructure"
              description="Availability of utilities, internet, and essential services."
              isToggled={criteria.infrastructure.enabled}
              onToggle={() => handleToggleCriteria('infrastructure')}
              weight={criteria.infrastructure.weight}
              onWeightChange={(e) => handleWeightChange('infrastructure', e.target.value)}
            />
          </div>
        </div>

        {/* Location Details */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Location Details</h2>
          <label htmlFor="targetLocation" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '4px' }}>Target Location</label>
          <input
            type="text"
            id="targetLocation"
            value={targetLocation}
            onChange={(e) => setTargetLocation(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              outline: 'none',
              boxShadow: '0 0 0 2px transparent',
              transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              marginBottom: '12px',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#4f46e5';
              e.currentTarget.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.5)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d1d5db';
              e.currentTarget.style.boxShadow = '0 0 0 2px transparent';
            }}
          />
          <button
            style={{
              width: '100%',
              backgroundColor: '#e0e7ff',
              color: '#4f46e5',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c7d2fe'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e0e7ff'}
          >
            <LocateFixed size={18} />
            <span>Use Current Location</span>
          </button>
          <div style={{
            height: '96px',
            backgroundColor: '#e5e7eb',
            borderRadius: '8px',
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
          }}>
            <img src="https://placehold.co/300x100/E0E7FF/4338CA?text=Map+Preview" alt="Map Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>

        {/* Suitability Overview */}
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1f2937', marginBottom: '16px' }}>Suitability Overview</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{
              position: 'relative',
              width: '112px',
              height: '112px',
              borderRadius: '50%',
              backgroundColor: '#e0e7ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4f46e5',
              fontWeight: 'bold',
              fontSize: '1.875rem',
            }}>
              <span style={{ position: 'absolute', zIndex: 1 }}>78%</span>
              <svg style={{ position: 'absolute', width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                <circle style={{ strokeWidth: '10px', stroke: '#e5e7eb', fill: 'transparent' }} r="40" cx="50" cy="50" />
                <circle
                  style={{
                    strokeWidth: '10px',
                    strokeDasharray: `${(78 / 100) * 2 * Math.PI * 40} ${2 * Math.PI * 40}`,
                    strokeDashoffset: 0,
                    strokeLinecap: 'round',
                    stroke: '#4f46e5',
                    fill: 'transparent',
                    transition: 'stroke-dasharray 0.5s ease-in-out',
                  }}
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
            </div>
            <p style={{ color: '#4f46e5', fontWeight: 600, marginTop: '8px' }}>Overall Score</p>
            <p style={{ fontSize: '0.875rem', color: '#16a34a', fontWeight: 500 }}>Good Potential</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px', fontSize: '0.875rem' }}>
            <ScoreItem icon={<CheckCircle size={16} style={{ color: '#22c55e' }} />} label="Population Density" score="88%" color="#16a34a" />
            <ScoreItem icon={<CheckCircle size={16} style={{ color: '#22c55e' }} />} label="Demographics Fit" score="72%" color="#ea580c" />
            <ScoreItem icon={<CheckCircle size={16} style={{ color: '#22c55e' }} />} label="Accessibility" score="95%" color="#16a34a" />
            <ScoreItem icon={<XCircle size={16} style={{ color: '#ef4444' }} />} label="Competitor Proximity" score="45%" color="#dc2626" />
            <ScoreItem icon={<CheckCircle size={16} style={{ color: '#22c55e' }} />} label="Infrastructure" score="92%" color="#16a34a" />
          </div>
        </div>

        <button
          onClick={handleAnalyzeSuitability}
          style={{
            width: '100%',
            backgroundColor: '#4f46e5',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '12px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            marginBottom: '24px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          Analyze Suitability
        </button>
      </div>
    </div>
  );
}

// Criteria Item Component for Site Suitability
const CriteriaItem = ({ icon, title, description, isToggled, onToggle, weight, onWeightChange }) => (
  <div style={{
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ padding: '8px', backgroundColor: '#e0e7ff', borderRadius: '8px', color: '#4f46e5' }}>
          {icon}
        </div>
        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827', flexGrow: 1 }}>{title}</span>
      </div>
      <ToggleSwitch isToggled={isToggled} onToggle={onToggle} />
    </div>
    <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '12px' }}>{description}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <label style={{ fontSize: '0.75rem', color: '#374151' }}>Weight:</label>
      <input
        type="range"
        min="0"
        max="100"
        value={weight}
        onChange={onWeightChange}
        style={{
          flexGrow: 1,
          height: '4px',
          background: `linear-gradient(to right, #6366F1 0%, #6366F1 ${weight}%, #E0E7FF ${weight}%, #E0E7FF 100%)`,
          borderRadius: '9999px',
          WebkitAppearance: 'none', // For Chrome/Safari
          appearance: 'none',
          cursor: 'pointer',
          outline: 'none',
        }}
        // Custom thumb styles (inline for WebKit, for Firefox you'd need ::-moz-range-thumb in a <style> tag or external CSS)
      />
      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4f46e5' }}>{weight}%</span>
      <a href="#" style={{ fontSize: '0.75rem', color: '#6366f1', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
        <span>Details</span>
        <ChevronDown size={12} style={{ transform: 'rotate(90deg)' }} />
      </a>
    </div>
  </div>
);

// Score Item for Suitability Overview
const ScoreItem = ({ icon, label, score, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    {icon}
    <span style={{ color: '#374151' }}>{label}</span>
    <span style={{ fontWeight: 600, color: color }}>{score}</span>
  </div>
);

// Reusable Toggle Switch Component
const ToggleSwitch = ({ isToggled, onToggle }) => (
  <button
    onClick={onToggle}
    style={{
      position: 'relative',
      display: 'inline-flex',
      height: '24px',
      width: '44px',
      flexShrink: 0,
      cursor: 'pointer',
      border: '2px solid transparent',
      borderRadius: '9999px',
      transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
      outline: 'none',
      boxShadow: '0 0 0 2px transparent',
      backgroundColor: isToggled ? '#4f46e5' : '#e5e7eb',
    }}
    role="switch"
    aria-checked={isToggled}
    onFocus={(e) => {
      e.currentTarget.style.borderColor = '#6366f1';
      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.5), 0 0 0 4px rgba(79, 70, 229, 0.2)';
    }}
    onBlur={(e) => {
      e.currentTarget.style.borderColor = 'transparent';
      e.currentTarget.style.boxShadow = '0 0 0 2px transparent';
    }}
  >
    <span
      aria-hidden="true"
      style={{
        pointerEvents: 'none',
        display: 'inline-block',
        height: '20px',
        width: '20px',
        transform: isToggled ? 'translateX(20px)' : 'translateX(0)',
        borderRadius: '9999px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease-in-out',
        boxSizing: 'border-box',
      }}
    />
  </button>
);

export default App;
