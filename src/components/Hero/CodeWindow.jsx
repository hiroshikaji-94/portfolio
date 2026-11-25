import {
  StyledCodeWindow,
  StyledCodeHeader,
  StyledCodeDots,
  StyledCode,
} from '../../styles/Hero/StyledHero';

// Decorative editor window. Its facts repeat the hero text, so it is hidden
// from screen readers.
const CodeWindow = () => {
  return (
    <StyledCodeWindow aria-hidden='true'>
      <StyledCodeHeader>
        <span>engineer.py</span>
        <StyledCodeDots>
          <i />
          <i />
          <i />
        </StyledCodeDots>
      </StyledCodeHeader>
      <StyledCode>
        <code>
          <span className='kw'>class</span>{' '}
          <span className='fn'>SeniorEngineer</span>:{'\n'}
          {'    '}
          <span className='kw'>def</span> <span className='fn'>__init__</span>(
          <span className='self'>self</span>):{'\n'}
          {'        '}
          <span className='self'>self</span>.name ={' '}
          <span className='str'>&quot;Hiroshi Kaji&quot;</span>
          {'\n'}
          {'        '}
          <span className='self'>self</span>.based_in ={' '}
          <span className='str'>&quot;Tokyo, Japan&quot;</span>
          {'\n'}
          {'        '}
          <span className='self'>self</span>.focus = [{'\n'}
          {'            '}
          <span className='str'>&quot;LLM &amp; Multi-Agent Systems&quot;</span>
          ,{'\n'}
          {'            '}
          <span className='str'>&quot;RAG &amp; Data Pipelines&quot;</span>,
          {'\n'}
          {'            '}
          <span className='str'>&quot;Cloud-Native Microservices&quot;</span>,
          {'\n'}
          {'        '}]{'\n'}
          {'\n'}
          {'    '}
          <span className='kw'>def</span> <span className='fn'>ship</span>(
          <span className='self'>self</span>, idea):{'\n'}
          {'        '}
          <span className='kw'>return</span>{' '}
          <span className='fn'>production_ready</span>(idea)
        </code>
      </StyledCode>
    </StyledCodeWindow>
  );
};

export default CodeWindow;
