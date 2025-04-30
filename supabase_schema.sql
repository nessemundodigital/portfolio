-- Tabela para categorias do portfólio
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  label VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela para itens do portfólio
CREATE TABLE portfolio_items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  short_description TEXT,
  image_url TEXT,
  category_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela para depoimentos
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela para posts do blog
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  date DATE,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela para informações da página Sobre
CREATE TABLE about_info (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Tabela para informações de contato
CREATE TABLE contact_info (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
