import { OutputScopeOptions, createScope } from "@alloy-js/core";
import { RustNamedTypeSymbol } from "../symbols/01_named-type.js";
import { useRustScope } from "./05_contexts.js";
import { RustNamedTypeScope } from "./03_named-type.js";
import { RustFunctionScope } from "./04_function.js";
import { RustLexicalScope } from "./01_lexical.js";
import { RustSourceFileScope } from "./02_source-file.js";

export function createNamedTypeScope(
  ownerSymbol: RustNamedTypeSymbol,
  options: OutputScopeOptions = {},
): RustNamedTypeScope {
  const currentScope = useRustScope();
  return createScope(RustNamedTypeScope, ownerSymbol, currentScope, options);
}

export function createFunctionScope(
  options: OutputScopeOptions = {},
): RustFunctionScope {
  const parentScope = useRustScope();
  return createScope(RustFunctionScope, "function scope", parentScope, options);
}
