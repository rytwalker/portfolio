import React from 'react';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './layout.css';

library.add(fab, faExternalLinkAlt);

export default ({ children }) => <div>{children}</div>;
