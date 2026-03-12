import React from 'react';
import { IconMap, IconName } from './IconMap';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size }) => {
  const IconComponent = IconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in IconMap`);
    // Retorna um span vazio em vez de null para evitar problemas de renderização
    return <span className={className} style={{ display: 'inline-block', width: size || 16, height: size || 16 }} />;
  }

  return <IconComponent className={className} size={size} />;
};