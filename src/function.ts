// https://www.terraform.io/docs/providers/postgresql/r/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Body of the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#body Function#body}
  */
  readonly body: string;
  /**
  * Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#drop_cascade Function#drop_cascade}
  */
  readonly dropCascade?: boolean | cdktf.IResolvable;
  /**
  * Name of the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#name Function#name}
  */
  readonly name: string;
  /**
  * Function return type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#returns Function#returns}
  */
  readonly returns?: string;
  /**
  * Schema where the function is located. If not specified, the provider default schema is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#schema Function#schema}
  */
  readonly schema?: string;
  /**
  * arg block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#arg Function#arg}
  */
  readonly arg?: FunctionArg[] | cdktf.IResolvable;
}
export interface FunctionArg {
  /**
  * An expression to be used as default value if the parameter is not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#default Function#default}
  */
  readonly default?: string;
  /**
  * The argument mode. One of: IN, OUT, INOUT, or VARIADIC
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#mode Function#mode}
  */
  readonly mode?: string;
  /**
  * The argument name. The name may be required for some languages or depending on the argument mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#name Function#name}
  */
  readonly name?: string;
  /**
  * The argument type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#type Function#type}
  */
  readonly type: string;
}

export function functionArgToTerraform(struct?: FunctionArg | cdktf.IResolvable): any {
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/function postgresql_function}
*/
export class Function extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "postgresql_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/function postgresql_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_function',
      terraformGeneratorMetadata: {
        providerName: 'postgresql',
        providerVersion: '1.16.0',
        providerVersionConstraint: '~> 1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._body = config.body;
    this._dropCascade = config.dropCascade;
    this._name = config.name;
    this._returns = config.returns;
    this._schema = config.schema;
    this._arg = config.arg;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // returns - computed: false, optional: true, required: false
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

  // arg - computed: false, optional: true, required: false
  private _arg?: FunctionArg[] | cdktf.IResolvable; 
  public get arg() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('arg');
  }
  public set arg(value: FunctionArg[] | cdktf.IResolvable) {
    this._arg = value;
  }
  public resetArg() {
    this._arg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      name: cdktf.stringToTerraform(this._name),
      returns: cdktf.stringToTerraform(this._returns),
      schema: cdktf.stringToTerraform(this._schema),
      arg: cdktf.listMapper(functionArgToTerraform)(this._arg),
    };
  }
}
