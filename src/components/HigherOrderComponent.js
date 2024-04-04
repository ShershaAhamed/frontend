import React from 'react';

const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const MyComponent = () => {
  return <p>Hi, I'm a component</p>;
};

const EnhancedComponent = withLogging(MyComponent);

export default EnhancedComponent;
