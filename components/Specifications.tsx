import React, { useState } from 'react';

interface SpecItem {
  item: string;
  description: string;
}

interface SpecCategory {
  title: string;
  content: SpecItem[];
}

interface SpecificationsProps {
  categories: SpecCategory[];
}

const Specifications: React.FC<SpecificationsProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState<string>(categories[0]?.title || '');

  const renderContent = () => {
    const activeCategory = categories.find(category => category.title === activeTab);
    return activeCategory ? <SpecContent content={activeCategory.content} /> : null;
  };

  return (
    <section style={styles.section as React.CSSProperties}>
      <div style={styles.container as React.CSSProperties}>
        {/* Título da Página */}
        <h2 style={styles.title as React.CSSProperties}>
          Especificações
        </h2>
        
        {/* Menu Horizontal */}
        <div style={styles.menuContainer as React.CSSProperties}>
          <ul style={styles.menuList as React.CSSProperties}>
            {categories.map((category) => (
              <li
                key={category.title}
                style={activeTab === category.title ? styles.activeTab : styles.tab}
                onClick={() => setActiveTab(category.title)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Conteúdo das Especificações */}
        <div style={styles.contentContainer as React.CSSProperties}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

// Componente Genérico para Exibir Conteúdo de Especificações
const SpecContent: React.FC<{ content: SpecItem[] }> = ({ content }) => {
  return (
    <div>
      {content.map((spec, index) => (
        <div key={index} style={styles.itemRow as React.CSSProperties}>
          <span style={styles.itemLabel as React.CSSProperties}>{spec.item}</span>
          <span style={styles.itemValue as React.CSSProperties}>{spec.description}</span>
        </div>
      ))}
    </div>
  );
};

// Estilos para Desktop e Mobile
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 0', // Reduzi o padding para evitar espaços excessivos
    backgroundAttachment: 'fixed',
    minHeight: 'auto', // Removi a altura mínima
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  title: {
    fontSize: '38px',
    paddingBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00B3AC',
    margin: '0 auto',
    maxWidth: '90%',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
    marginBottom: '20px',
    overflowX: 'auto', 
  },
  menuList: {
    display: 'flex',
    gap: '20px',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '16px',
    color: '#fff',
    flexWrap: 'wrap', 
  },
  tab: {
    cursor: 'pointer',
    color: '#fff',
    paddingBottom: '5px',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
  },
  activeTab: {
    cursor: 'pointer',
    color: '#00B3AC',
    fontWeight: 'bold',
    paddingBottom: '5px',
    borderBottom: '2px solid #00B3AC',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
  },
  contentContainer: {
    marginTop: '20px',
    padding: '0 20px',
    maxWidth: '100%',
    boxSizing: 'border-box', 
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    borderBottom: '1px solid #333',
    fontSize: '16px',
    flexWrap: 'wrap',  
  },
  itemLabel: {
    color: '#fff',
    fontWeight: 'bold',
    flexBasis: '45%',
  },
  itemValue: {
    color: '#888',
    flexBasis: '45%',
    textAlign: 'right',
  },
};


export default Specifications;
