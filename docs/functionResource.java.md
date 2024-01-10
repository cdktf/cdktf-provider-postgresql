# `functionResource` Submodule <a name="`functionResource` Submodule" id="@cdktf/provider-postgresql.functionResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionResource <a name="FunctionResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function postgresql_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResource;

FunctionResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .body(java.lang.String)
    .name(java.lang.String)
//  .arg(IResolvable)
//  .arg(java.util.List<FunctionResourceArg>)
//  .database(java.lang.String)
//  .dropCascade(java.lang.Boolean)
//  .dropCascade(IResolvable)
//  .id(java.lang.String)
//  .language(java.lang.String)
//  .parallel(java.lang.String)
//  .returns(java.lang.String)
//  .schema(java.lang.String)
//  .securityDefiner(java.lang.Boolean)
//  .securityDefiner(IResolvable)
//  .strict(java.lang.Boolean)
//  .strict(IResolvable)
//  .volatility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.arg">arg</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>></code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.parallel">parallel</a></code> | <code>java.lang.String</code> | If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.returns">returns</a></code> | <code>java.lang.String</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Schema where the function is located. If not specified, the provider default schema is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.securityDefiner">securityDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the function should execute with the permissions of the function owner instead of the permissions of the caller. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.strict">strict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the function should always return NULL if any of it's inputs is NULL. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.volatility">volatility</a></code> | <code>java.lang.String</code> | Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#body FunctionResource#body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.arg"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>>

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#arg FunctionResource#arg}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#database FunctionResource#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.dropCascade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.language"></a>

- *Type:* java.lang.String

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#language FunctionResource#language}

---

##### `parallel`<sup>Optional</sup> <a name="parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.parallel"></a>

- *Type:* java.lang.String

If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#parallel FunctionResource#parallel}

---

##### `returns`<sup>Optional</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.returns"></a>

- *Type:* java.lang.String

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#returns FunctionResource#returns}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#schema FunctionResource#schema}

---

##### `securityDefiner`<sup>Optional</sup> <a name="securityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.securityDefiner"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the function should execute with the permissions of the function owner instead of the permissions of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#security_definer FunctionResource#security_definer}

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.strict"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the function should always return NULL if any of it's inputs is NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#strict FunctionResource#strict}

---

##### `volatility`<sup>Optional</sup> <a name="volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.Initializer.parameter.volatility"></a>

- *Type:* java.lang.String

Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#volatility FunctionResource#volatility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.putArg">putArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg">resetArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade">resetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel">resetParallel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns">resetReturns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner">resetSecurityDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict">resetStrict</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility">resetVolatility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.functionResource.FunctionResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-postgresql.functionResource.FunctionResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArg` <a name="putArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg"></a>

```java
public void putArg(IResolvable OR java.util.List<FunctionResourceArg> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.functionResource.FunctionResource.putArg.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>>

---

##### `resetArg` <a name="resetArg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetArg"></a>

```java
public void resetArg()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDropCascade` <a name="resetDropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetDropCascade"></a>

```java
public void resetDropCascade()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetId"></a>

```java
public void resetId()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetParallel` <a name="resetParallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetParallel"></a>

```java
public void resetParallel()
```

##### `resetReturns` <a name="resetReturns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetReturns"></a>

```java
public void resetReturns()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSecurityDefiner` <a name="resetSecurityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetSecurityDefiner"></a>

```java
public void resetSecurityDefiner()
```

##### `resetStrict` <a name="resetStrict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetStrict"></a>

```java
public void resetStrict()
```

##### `resetVolatility` <a name="resetVolatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.resetVolatility"></a>

```java
public void resetVolatility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResource;

FunctionResource.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResource;

FunctionResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResource;

FunctionResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.functionResource.FunctionResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResource;

FunctionResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FunctionResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FunctionResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FunctionResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FunctionResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput">argInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput">dropCascadeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput">parallelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput">returnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput">securityDefinerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput">strictInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput">volatilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel">parallel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns">returns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner">securityDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict">strict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility">volatility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.arg"></a>

```java
public FunctionResourceArgList getArg();
```

- *Type:* <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList">FunctionResourceArgList</a>

---

##### `argInput`<sup>Optional</sup> <a name="argInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.argInput"></a>

```java
public java.lang.Object getArgInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="dropCascadeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascadeInput"></a>

```java
public java.lang.Object getDropCascadeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parallelInput`<sup>Optional</sup> <a name="parallelInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallelInput"></a>

```java
public java.lang.String getParallelInput();
```

- *Type:* java.lang.String

---

##### `returnsInput`<sup>Optional</sup> <a name="returnsInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returnsInput"></a>

```java
public java.lang.String getReturnsInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `securityDefinerInput`<sup>Optional</sup> <a name="securityDefinerInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefinerInput"></a>

```java
public java.lang.Object getSecurityDefinerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strictInput"></a>

```java
public java.lang.Object getStrictInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volatilityInput`<sup>Optional</sup> <a name="volatilityInput" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatilityInput"></a>

```java
public java.lang.String getVolatilityInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `dropCascade`<sup>Required</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.dropCascade"></a>

```java
public java.lang.Object getDropCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parallel`<sup>Required</sup> <a name="parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.parallel"></a>

```java
public java.lang.String getParallel();
```

- *Type:* java.lang.String

---

##### `returns`<sup>Required</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.returns"></a>

```java
public java.lang.String getReturns();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `securityDefiner`<sup>Required</sup> <a name="securityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.securityDefiner"></a>

```java
public java.lang.Object getSecurityDefiner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.strict"></a>

```java
public java.lang.Object getStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volatility`<sup>Required</sup> <a name="volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.volatility"></a>

```java
public java.lang.String getVolatility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.functionResource.FunctionResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionResourceArg <a name="FunctionResourceArg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResourceArg;

FunctionResourceArg.builder()
    .type(java.lang.String)
//  .default(java.lang.String)
//  .mode(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type">type</a></code> | <code>java.lang.String</code> | The argument type. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default">default</a></code> | <code>java.lang.String</code> | An expression to be used as default value if the parameter is not specified. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode">mode</a></code> | <code>java.lang.String</code> | The argument mode. One of: IN, OUT, INOUT, or VARIADIC. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name">name</a></code> | <code>java.lang.String</code> | The argument name. The name may be required for some languages or depending on the argument mode. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#type FunctionResource#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

An expression to be used as default value if the parameter is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#default FunctionResource#default}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The argument mode. One of: IN, OUT, INOUT, or VARIADIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#mode FunctionResource#mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArg.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The argument name. The name may be required for some languages or depending on the argument mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

### FunctionResourceConfig <a name="FunctionResourceConfig" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResourceConfig;

FunctionResourceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .body(java.lang.String)
    .name(java.lang.String)
//  .arg(IResolvable)
//  .arg(java.util.List<FunctionResourceArg>)
//  .database(java.lang.String)
//  .dropCascade(java.lang.Boolean)
//  .dropCascade(IResolvable)
//  .id(java.lang.String)
//  .language(java.lang.String)
//  .parallel(java.lang.String)
//  .returns(java.lang.String)
//  .schema(java.lang.String)
//  .securityDefiner(java.lang.Boolean)
//  .securityDefiner(IResolvable)
//  .strict(java.lang.Boolean)
//  .strict(IResolvable)
//  .volatility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body">body</a></code> | <code>java.lang.String</code> | Body of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the function. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg">arg</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>></code> | arg block. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database where the function is located. If not specified, the provider default database is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language">language</a></code> | <code>java.lang.String</code> | Language of theof the function. One of: internal, sql, c, plpgsql. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel">parallel</a></code> | <code>java.lang.String</code> | If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns">returns</a></code> | <code>java.lang.String</code> | Function return type. If not specified, it will be calculated based on the output arguments. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Schema where the function is located. If not specified, the provider default schema is used. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner">securityDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the function should execute with the permissions of the function owner instead of the permissions of the caller. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict">strict</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the function should always return NULL if any of it's inputs is NULL. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility">volatility</a></code> | <code>java.lang.String</code> | Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Body of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#body FunctionResource#body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#name FunctionResource#name}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.arg"></a>

```java
public java.lang.Object getArg();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>>

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#arg FunctionResource#arg}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database where the function is located. If not specified, the provider default database is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#database FunctionResource#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.dropCascade"></a>

```java
public java.lang.Object getDropCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically drop objects that depend on the function (such as operators or triggers), and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#drop_cascade FunctionResource#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#id FunctionResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Language of theof the function. One of: internal, sql, c, plpgsql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#language FunctionResource#language}

---

##### `parallel`<sup>Optional</sup> <a name="parallel" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.parallel"></a>

```java
public java.lang.String getParallel();
```

- *Type:* java.lang.String

If the function can be executed in parallel for a single query execution. One of: UNSAFE, RESTRICTED, SAFE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#parallel FunctionResource#parallel}

---

##### `returns`<sup>Optional</sup> <a name="returns" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.returns"></a>

```java
public java.lang.String getReturns();
```

- *Type:* java.lang.String

Function return type. If not specified, it will be calculated based on the output arguments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#returns FunctionResource#returns}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Schema where the function is located. If not specified, the provider default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#schema FunctionResource#schema}

---

##### `securityDefiner`<sup>Optional</sup> <a name="securityDefiner" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.securityDefiner"></a>

```java
public java.lang.Object getSecurityDefiner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the function should execute with the permissions of the function owner instead of the permissions of the caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#security_definer FunctionResource#security_definer}

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.strict"></a>

```java
public java.lang.Object getStrict();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the function should always return NULL if any of it's inputs is NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#strict FunctionResource#strict}

---

##### `volatility`<sup>Optional</sup> <a name="volatility" id="@cdktf/provider-postgresql.functionResource.FunctionResourceConfig.property.volatility"></a>

```java
public java.lang.String getVolatility();
```

- *Type:* java.lang.String

Volatility of the function. One of: VOLATILE, STABLE, IMMUTABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.21.0/docs/resources/function#volatility FunctionResource#volatility}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionResourceArgList <a name="FunctionResourceArgList" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResourceArgList;

new FunctionResourceArgList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get"></a>

```java
public FunctionResourceArgOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>>

---


### FunctionResourceArgOutputReference <a name="FunctionResourceArgOutputReference" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.function_resource.FunctionResourceArgOutputReference;

new FunctionResourceArgOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-postgresql.functionResource.FunctionResourceArgOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-postgresql.functionResource.FunctionResourceArg">FunctionResourceArg</a>

---



