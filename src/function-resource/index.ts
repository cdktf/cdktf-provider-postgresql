/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Body of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#body FunctionResource#body}
  */
  readonly body: string;
  /**
  * The database where the function is located. If not specified, the provider default database is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#database FunctionResource#database}
  */
  readonly database?: string;
  /**
  * Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language of theof the function. One of: internal, sql, c, plpgsql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#language FunctionResource#language}
  */
  readonly language?: string;
  /**
  * Name of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name: string;
  /**
  * If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#parallel FunctionResource#parallel}
  */
  readonly parallel?: string;
  /**
  * Function return type. If not specified, it will be calculated based on the output arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#returns FunctionResource#returns}
  */
  readonly returns?: string;
  /**
  * Schema where the function is located. If not specified, the provider default schema is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#schema FunctionResource#schema}
  */
  readonly schema?: string;
  /**
  * If the function should execute with the permissions of the function owner instead of the permissions of the caller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#security_definer FunctionResource#security_definer}
  */
  readonly securityDefiner?: boolean | cdktf.IResolvable;
  /**
  * If the function should always return NULL if any of it's inputs is NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#strict FunctionResource#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
  /**
  * Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#volatility FunctionResource#volatility}
  */
  readonly volatility?: string;
  /**
  * arg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#arg FunctionResource#arg}
  */
  readonly arg?: FunctionResourceArg[] | cdktf.IResolvable;
}
export interface FunctionResourceArg {
  /**
  * An expression to be used as default value if the parameter is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#default FunctionResource#default}
  */
  readonly default?: string;
  /**
  * The argument mode. One of: IN, OUT, INOUT, or VARIADIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#mode FunctionResource#mode}
  */
  readonly mode?: string;
  /**
  * The argument name. The name may be required for some languages or depending on the argument mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name?: string;
  /**
  * The argument type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#type FunctionResource#type}
  */
  readonly type: string;
}

export function functionResourceArgToTerraform(struct?: FunctionResourceArg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function functionResourceArgToHclTerraform(struct?: FunctionResourceArg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceArgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionResourceArg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceArg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._mode = value.mode;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FunctionResourceArgList extends cdktf.ComplexList {
  public internalValue? : FunctionResourceArg[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionResourceArgOutputReference {
    return new FunctionResourceArgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function postgresql_function}
*/
export class FunctionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionResource to import
  * @param importFromId The id of the existing FunctionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "postgresql_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function postgresql_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_function',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.21.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._database = config.database;
    this._dropCascade = config.dropCascade;
    this._id = config.id;
    this._language = config.language;
    this._name = config.name;
    this._parallel = config.parallel;
    this._returns = config.returns;
    this._schema = config.schema;
    this._securityDefiner = config.securityDefiner;
    this._strict = config.strict;
    this._volatility = config.volatility;
    this._arg.internalValue = config.arg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // drop_cascade - computed: false, optional: true, required: false
  private _dropCascade?: boolean | cdktf.IResolvable; 
  public get dropCascade() {
    return this.getBooleanAttribute('drop_cascade');
  }
  public set dropCascade(value: boolean | cdktf.IResolvable) {
    this._dropCascade = value;
  }
  public resetDropCascade() {
    this._dropCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCascadeInput() {
    return this._dropCascade;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: string; 
  public get parallel() {
    return this.getStringAttribute('parallel');
  }
  public set parallel(value: string) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // returns - computed: true, optional: true, required: false
  private _returns?: string; 
  public get returns() {
    return this.getStringAttribute('returns');
  }
  public set returns(value: string) {
    this._returns = value;
  }
  public resetReturns() {
    this._returns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // security_definer - computed: false, optional: true, required: false
  private _securityDefiner?: boolean | cdktf.IResolvable; 
  public get securityDefiner() {
    return this.getBooleanAttribute('security_definer');
  }
  public set securityDefiner(value: boolean | cdktf.IResolvable) {
    this._securityDefiner = value;
  }
  public resetSecurityDefiner() {
    this._securityDefiner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDefinerInput() {
    return this._securityDefiner;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }

  // volatility - computed: false, optional: true, required: false
  private _volatility?: string; 
  public get volatility() {
    return this.getStringAttribute('volatility');
  }
  public set volatility(value: string) {
    this._volatility = value;
  }
  public resetVolatility() {
    this._volatility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volatilityInput() {
    return this._volatility;
  }

  // arg - computed: false, optional: true, required: false
  private _arg = new FunctionResourceArgList(this, "arg", false);
  public get arg() {
    return this._arg;
  }
  public putArg(value: FunctionResourceArg[] | cdktf.IResolvable) {
    this._arg.internalValue = value;
  }
  public resetArg() {
    this._arg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      database: cdktf.stringToTerraform(this._database),
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      parallel: cdktf.stringToTerraform(this._parallel),
      returns: cdktf.stringToTerraform(this._returns),
      schema: cdktf.stringToTerraform(this._schema),
      security_definer: cdktf.booleanToTerraform(this._securityDefiner),
      strict: cdktf.booleanToTerraform(this._strict),
      volatility: cdktf.stringToTerraform(this._volatility),
      arg: cdktf.listMapper(functionResourceArgToTerraform, true)(this._arg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_cascade: {
        value: cdktf.booleanToHclTerraform(this._dropCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallel: {
        value: cdktf.stringToHclTerraform(this._parallel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      returns: {
        value: cdktf.stringToHclTerraform(this._returns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_definer: {
        value: cdktf.booleanToHclTerraform(this._securityDefiner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      strict: {
        value: cdktf.booleanToHclTerraform(this._strict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volatility: {
        value: cdktf.stringToHclTerraform(this._volatility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arg: {
        value: cdktf.listMapperHcl(functionResourceArgToHclTerraform, true)(this._arg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceArgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
