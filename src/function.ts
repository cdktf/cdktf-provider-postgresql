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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/function#id Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class FunctionArgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionArg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FunctionArg | cdktf.IResolvable | undefined) {
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

export class FunctionArgList extends cdktf.ComplexList {
  public internalValue? : FunctionArg[] | cdktf.IResolvable

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
  public get(index: number): FunctionArgOutputReference {
    return new FunctionArgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._dropCascade = config.dropCascade;
    this._id = config.id;
    this._name = config.name;
    this._returns = config.returns;
    this._schema = config.schema;
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
  private _arg = new FunctionArgList(this, "arg", false);
  public get arg() {
    return this._arg;
  }
  public putArg(value: FunctionArg[] | cdktf.IResolvable) {
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
      drop_cascade: cdktf.booleanToTerraform(this._dropCascade),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      returns: cdktf.stringToTerraform(this._returns),
      schema: cdktf.stringToTerraform(this._schema),
      arg: cdktf.listMapper(functionArgToTerraform, true)(this._arg.internalValue),
    };
  }
}
