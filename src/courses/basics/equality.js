import React from 'react';
import CodeSandbox from '../../components/CodeSandbox';
import Editor from '../../components/Editor';

export default {
  title: "Equality",
  content: (

    <div>

      Programmers frequently need to determine the equality of variables in relation to other variables. This is done using an equality operator. <br /><br />

      The most basic equality operator is the <code>==</code> operator. This operator does everything it can to determine if two variables are equal, even if they are not of the same type. <br /><br />

      For example, assume:

      <Editor value={`
var foo = 42;
var bar = 42;
var baz = "42";
var qux = "life";
`} />

      <code>foo == bar</code> will evaluate to <code>true</code> and <code>baz == qux</code> will evaluate to <code>false</code>, as one would expect. However, <code>foo == baz</code> will <em>also</em> evaluate to <code>true</code> despite <code>foo</code> and <code>baz</code> being different types. Behind the scenes the <code>==</code> equality operator attempts to force its operands to the same type before determining their equality. This is in contrast to the <code>===</code> equality operator. <br /> <br />

      The <code>===</code> equality operator determines that two variables are equal if they are of the same type <em>and</em> have the same value. With the same assumptions as before, this means that <code>foo === bar</code> will still evaluate to <code>true</code>,  but <code>foo === baz</code> will now evaluate to <code>false</code>. <code>baz === qux</code> will still evaluate to <code>false</code>.











        <CodeSandbox slug="basics/equality" initialCodeContent={`
// You can simply click on "Run" on see the results
`} testContent={`
// Tests
testEquality(42 == 42,            true);
testEquality(42 === 42,           true);
testEquality("42" == 42,          true);
testEquality("42" === 42,         false);
testEquality("Hello" === "Hello", true);
testEquality("Hello" === "hello", false);
`} />

    </div>

  )
};