import React from 'react';
import { AutoLinkHeader } from 'generated-pf-docs/components/autoLinkHeader/autoLinkHeader';
import { Example } from 'generated-pf-docs/components/example/example';
import { Link as PatternflyThemeLink } from 'generated-pf-docs/components/link/link';
import { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';
import { helpTopics as exampleHelpTopics } from '../../../src/__docs__/./example-data';
import '@patternfly/quickstarts/dist/quickstarts.css';
const pageData = {
  "id": "Quick Starts",
  "section": "Extensions",
  "source": "In-App-Documentation",
  "slug": "/extensions/quick-starts/In-App-Documentation",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/dev/bare-qs-docs/src/__docs__/inapp.md",
  "fullscreenExamples": [
    "Basic Example"
  ],
  "toc": [
    {
      "text": "In App Documentation"
    },
    [
      {
        "text": "Basic Example"
      }
    ]
  ]
};
pageData.liveContext = {
  LoadingBox,
  HelpTopicContainer,
  HelpTopicContext,
  exampleHelpTopics
};
pageData.examples = {
  'Basic Example': props => 
    <Example {...pageData} {...props} {...{"code":"import './App.css';\nimport React from 'react';\nimport { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';\nimport { helpTopics as exampleHelpTopics } from './example-data'\n\nconst TinyMockConsole = () => {\n  const { setActiveHelpTopicByName, helpTopics } = React.useContext(HelpTopicContext);\n\n  const handleSetTopic = (name) => {\n    setActiveHelpTopicByName(name);\n  }\n\n  return (\n    <Stack hasGutter>\n      {helpTopics.map(topic => {\n        return (\n          <StackItem key={topic.name}>\n            <a onClick={() => handleSetTopic(topic.name)}>Open Help {topic.title}</a>\n          </StackItem>\n        )\n      })}\n    </Stack>\n  )\n}\n\nconst AppHelpTopicDemo = () => {\n  \n  const language = localStorage.getItem('bridge/language') || 'en';\n\n  const [loading, setLoading] = React.useState(true);\n  React.useEffect(() => {\n    const load = async () => {\n      setLoading(false);\n    };\n    setTimeout(() => {\n      load();\n    }, 500);\n  }, []);\n\n  const inContextHelpProps = {\n    helpTopics: exampleHelpTopics,\n    language,\n    loading,\n  };\n\n  return (\n    <React.Suspense fallback={<LoadingBox />}>\n      <HelpTopicContainer {...inContextHelpProps}>\n        <TinyMockConsole />\n      </HelpTopicContainer>\n    </React.Suspense>\n  );\n};","title":"Basic Example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

export const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"in-app-documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`In App Documentation`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic Example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsQuickStartsInAppDocumentationDocs';
Component.pageData = pageData;

export default Component;
