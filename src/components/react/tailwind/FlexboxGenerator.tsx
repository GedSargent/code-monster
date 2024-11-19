import React from 'react';
import { motion } from 'framer-motion';

function FlexChild({ label }: { label: number }) {
  return (<motion.div className="!m-0 p-2" layout>
      <motion.div className={`!m-0 flex text-gray-600 items-center justify-center w-16 h-16 bg-gray-100 rounded-md shadow-md border border-gray-500 border-t-gray-400 dark:bg-gray-900 dark:text-gray-100`} layout="position">{label}</motion.div>
    </motion.div>)
}

function Button({ children, onClick, disabled = false }: { children: React.ReactNode, onClick: () => void, disabled?: boolean }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`!m-0 w-full px-4 py-2 text-white text-sm bg-blue-500 rounded cursor-pointer transition hover:bg-blue-600 ${disabled ? 'bg-blue-300/75 text-white/75 cursor-not-allowed hover:bg-blue-300/75' : ''}`}>{children}</button>
  )
}

function CheckBox({ label, checked, onChange, disabled = false }: { label: string, checked: boolean, onChange: (checked: boolean) => void, disabled?: boolean }) {
  return (
    <div className="!m-0">
      <label className={`!mt-0 flex gap-2 font-bold cursor-pointer transition ${disabled ? "opacity-30 select-none" : 'hover:text-gray-600 dark:hover:text-white'} dark:text-gray-300`}>
        <span className={`!mt-0 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{label}</span>
        <input type="checkbox" className="!mt-0 p-2 text-sm disabled:cursor-not-allowed" checked={checked} onChange={(event) => onChange(event.target.checked)} disabled={disabled} />
      </label>
    </div>
  )
}

interface SelectProps {
  label: string;
  options: {value: string, text: string}[];
  onChange: (value: string) => void;
  disabled?: boolean;
}
function Select({ label, options, onChange, disabled = false }: SelectProps) {
  function toSnakeCase(text: string) {
    return text.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
  }

  const snakeCaseLabel = toSnakeCase(label);

  return (
    <div className={`!mt-0 flex flex-col gap-1 w-1/3`}>
      <label className={`!mt-0 text-xs dark:text-gray-300 ${disabled ? "cursor-not-allowed opacity-40 select-none" : ""}`} htmlFor={snakeCaseLabel}>{label}</label>
      <select disabled={disabled} className={`!mt-0 p-2 text-sm dark:bg-gray-700 ${disabled ? "cursor-not-allowed" : ""}`} id={snakeCaseLabel} onChange={(event) => onChange(event.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value} className="dark:bg-gray-900">{option.text}</option>
        ))}
      </select>
    </div>
  )
}

function FlexboxGenerator() {
  const [numberOfChildren, setNumberOfChildren] = React.useState(2);
  const [applyFlex, setApplyFlex] = React.useState(false);
  const [flexWrap, setFlexWrap] = React.useState(false);
  const [flexDirection, setFlexDirection] = React.useState('flex-row');
  const [justifyContent, setJustifyContent] = React.useState('justify-start');
  const [alignItems, setAlignItems] = React.useState('items-start');
  const [usingReact, setUsingReact] = React.useState(false);
  const [usingTailwind, setUsingTailwind] = React.useState(false);

  const handleRemoveChild = () => {
    if (numberOfChildren === 1) return;

    setNumberOfChildren(numberOfChildren - 1);
  }

  const handleApplyFlex = () => {
    setApplyFlex(!applyFlex);
  }

  const handleJustifyContent = (value: string) => {
    setJustifyContent(value);
  }

  const handleAlignItems = (value: string) => {
    setAlignItems(value);
  }

  const handleFlexDirection = (value: string) => {
    setFlexDirection(value);
  }

  const handleFlexWrap = () => {
    setFlexWrap(!flexWrap);
  }

  const handleSetUsingTailwind = () => {
    setUsingTailwind(!usingTailwind);
  }

  const handleSetUsingReact = () => {
    setUsingReact(!usingReact);
  }

  return (
    <div className="w-full p-4 bg-gray-100 pt-1 rounded-md dark:bg-gray-900">
      <h2 className="!mt-4 text-2xl font-bold dark:text-white">Flexbox Generator</h2>

      {/* Flexbox */}
      <div className={`${applyFlex ? 'flex' : 'block'} ${flexDirection} ${alignItems} ${justifyContent} ${flexWrap ? 'flex-wrap' : 'flex-nowrap'} p-4 w-full min-h-[272px] rounded-lg overflow-x-auto bg-gray-300 dark:bg-gray-800`}>
        {Array.from({ length: numberOfChildren }).map((_, index) => (
          <FlexChild key={index} label={index + 1} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 rounded-md bg-gray-300 dark:bg-gray-700 p-4">
      <div className="!mt-0 rounded-md bg-gray-100 p-4 dark:bg-gray-900">
          <h5 className="!mt-0">Parent</h5>

          <div className="flex gap-2 mt-4">

            <div className="!mt-0 flex items-center gap-8">
              <CheckBox label="Apply flex?" checked={applyFlex} onChange={handleApplyFlex} />
              <CheckBox label="Flex wrap?" checked={flexWrap} onChange={handleFlexWrap} disabled={!applyFlex} />
            </div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Select label="Justify content" options={[
              { value: 'justify-start', text: 'justify-start' },
              { value: 'justify-end', text: 'justify-end' },
              { value: 'justify-center', text: 'justify-center' },
              { value: 'justify-between', text: 'justify-between' },
              { value: 'justify-around', text: 'justify-around' },
              { value: 'justify-evenly', text: 'justify-evenly' },
            ]} onChange={handleJustifyContent} disabled={!applyFlex} />

                        
            <Select label="Align items" options={[
              { value: 'items-start', text: 'items-start' },
              { value: 'items-end', text: 'items-end' },
              { value: 'items-center', text: 'items-center' },
              { value: 'items-baseline', text: 'items-baseline' },
              { value: 'items-stretch', text: 'items-stretch' },
            ]} onChange={handleAlignItems} disabled={!applyFlex} />

            <Select label="Flex direction" options={[
              { value: 'flex-row', text: 'flex-row' },
              { value: 'flex-col', text: 'flex-col' },
              { value: 'flex-row-reverse', text: 'flex-row-reverse' },
              { value: 'flex-col-reverse', text: 'flex-col-reverse' },
            ]} onChange={handleFlexDirection} disabled={!applyFlex} />
          </div>
        </div>

        <div className="!mt-0 flex flex-col gap-4 p-4 bg-gray-100 rounded dark:bg-gray-900">
          <h5 className="!mt-0">Children</h5>

          <div className="!mt-0 flex flex-row items-center gap-2">
            <div className="!mt-0 w-1/2">
              <Button onClick={() => setNumberOfChildren(numberOfChildren + 1)}>Add Child</Button>
            </div>
            <div className="!mt-0 w-1/2">
              <Button disabled={numberOfChildren === 1} onClick={handleRemoveChild}>Remove Child</Button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="!mt-0 mb-2 flex items-center gap-2">
            <CheckBox label="Using React?" checked={usingReact} onChange={handleSetUsingReact} disabled={!usingTailwind} />
            <CheckBox label="Using Tailwind?" checked={usingTailwind} onChange={handleSetUsingTailwind} />
          </div>
          {usingTailwind ? (
            <>
            <h3 className="!mt-0 mb-2">Tailwind CSS - Parent</h3>
            <p className="!mt-0 mb-4 text-sm">Copy and paste the code below into your parent flex container to recreate the layout above 😎.</p>
            <pre className="!m-0 p-4 bg-gray-900 rounded-md text-sm text-gray-300">
              <span className="text-cyan-500">{usingReact ? 'className' : 'class'}</span>=
              <span className="text-orange-300">"{`${applyFlex ? 'flex' : 'block'}${flexDirection !== "flex-row" && applyFlex ? ` ${flexDirection}` : ''}${alignItems !== 'items-start' && applyFlex ? ` ${alignItems}` : ''}${justifyContent !== 'justify-start' && applyFlex ? ` ${justifyContent}` : ''}${flexWrap && applyFlex ? ' flex-wrap' : ''}`}"</span>
            </pre>
            </>
          ): (
            <>
              <h3 className="!mt-0 mb-2">CSS styles</h3>
              <p className="!mt-0 mb-4 text-sm">Copy and paste the code below into your parent flex container to recreate the layout above 😎.</p>
              <pre className="!m-0 p-4 bg-gray-900 rounded-md text-sm text-gray-300">
                {`display: ${applyFlex ? 'flex' : 'block'};`}
                {flexDirection !== 'flex-row' && applyFlex ? `\nflex-direction: ${flexDirection};` : ''}
                {alignItems !== 'items-start' && applyFlex ? `\nalign-items: ${alignItems};` : ''}
                {justifyContent !== 'justify-start' && applyFlex ? `\njustify-content: ${justifyContent};` : ''}
                {flexWrap && applyFlex ? '\nflex-wrap: wrap;' : ''}
              </pre>
            </>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default FlexboxGenerator;