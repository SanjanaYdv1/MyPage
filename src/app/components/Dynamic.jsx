import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
  ssr: false, // Disable server-side rendering for this component
});
