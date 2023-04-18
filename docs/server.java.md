# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-postgresql.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-postgresql.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.server.Server.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.server.Server;

Server.Builder.create(Construct scope, java.lang.String id)
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
    .fdwName(java.lang.String)
    .serverName(java.lang.String)
//  .dropCascade(java.lang.Boolean)
//  .dropCascade(IResolvable)
//  .id(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .serverOwner(java.lang.String)
//  .serverType(java.lang.String)
//  .serverVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.fdwName">fdwName</a></code> | <code>java.lang.String</code> | The name of the foreign-data wrapper that manages the server. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | The name of the foreign server to be created. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This clause specifies the options for the server. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverOwner">serverOwner</a></code> | <code>java.lang.String</code> | The user name of the new owner of the foreign server. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverType">serverType</a></code> | <code>java.lang.String</code> | Optional server type, potentially useful to foreign-data wrappers. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverVersion">serverVersion</a></code> | <code>java.lang.String</code> | Optional server version, potentially useful to foreign-data wrappers. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fdwName`<sup>Required</sup> <a name="fdwName" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.fdwName"></a>

- *Type:* java.lang.String

The name of the foreign-data wrapper that manages the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#fdw_name Server#fdw_name}

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

The name of the foreign server to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_name Server#server_name}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.dropCascade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects.

Drop RESTRICT is the default

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#drop_cascade Server#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This clause specifies the options for the server.

The options typically define the connection details of the server, but the actual names and values are dependent on the server's foreign-data wrapper

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#options Server#options}

---

##### `serverOwner`<sup>Optional</sup> <a name="serverOwner" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverOwner"></a>

- *Type:* java.lang.String

The user name of the new owner of the foreign server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_owner Server#server_owner}

---

##### `serverType`<sup>Optional</sup> <a name="serverType" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverType"></a>

- *Type:* java.lang.String

Optional server type, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_type Server#server_type}

---

##### `serverVersion`<sup>Optional</sup> <a name="serverVersion" id="@cdktf/provider-postgresql.server.Server.Initializer.parameter.serverVersion"></a>

- *Type:* java.lang.String

Optional server version, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_version Server#server_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetDropCascade">resetDropCascade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerOwner">resetServerOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerType">resetServerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.resetServerVersion">resetServerVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-postgresql.server.Server.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-postgresql.server.Server.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.server.Server.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.server.Server.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-postgresql.server.Server.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-postgresql.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-postgresql.server.Server.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-postgresql.server.Server.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-postgresql.server.Server.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-postgresql.server.Server.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-postgresql.server.Server.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-postgresql.server.Server.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-postgresql.server.Server.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-postgresql.server.Server.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-postgresql.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDropCascade` <a name="resetDropCascade" id="@cdktf/provider-postgresql.server.Server.resetDropCascade"></a>

```java
public void resetDropCascade()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-postgresql.server.Server.resetId"></a>

```java
public void resetId()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-postgresql.server.Server.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetServerOwner` <a name="resetServerOwner" id="@cdktf/provider-postgresql.server.Server.resetServerOwner"></a>

```java
public void resetServerOwner()
```

##### `resetServerType` <a name="resetServerType" id="@cdktf/provider-postgresql.server.Server.resetServerType"></a>

```java
public void resetServerType()
```

##### `resetServerVersion` <a name="resetServerVersion" id="@cdktf/provider-postgresql.server.Server.resetServerVersion"></a>

```java
public void resetServerVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-postgresql.server.Server.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.server.Server;

Server.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-postgresql.server.Server.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.server.Server;

Server.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-postgresql.server.Server.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.server.Server;

Server.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dropCascadeInput">dropCascadeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fdwNameInput">fdwNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverOwnerInput">serverOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverTypeInput">serverTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverVersionInput">serverVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.fdwName">fdwName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverOwner">serverOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverType">serverType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.serverVersion">serverVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.server.Server.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-postgresql.server.Server.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.server.Server.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-postgresql.server.Server.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-postgresql.server.Server.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-postgresql.server.Server.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-postgresql.server.Server.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.server.Server.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.server.Server.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.server.Server.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.server.Server.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.server.Server.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.server.Server.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.server.Server.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="dropCascadeInput" id="@cdktf/provider-postgresql.server.Server.property.dropCascadeInput"></a>

```java
public java.lang.Object getDropCascadeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fdwNameInput`<sup>Optional</sup> <a name="fdwNameInput" id="@cdktf/provider-postgresql.server.Server.property.fdwNameInput"></a>

```java
public java.lang.String getFdwNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-postgresql.server.Server.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-postgresql.server.Server.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-postgresql.server.Server.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serverOwnerInput`<sup>Optional</sup> <a name="serverOwnerInput" id="@cdktf/provider-postgresql.server.Server.property.serverOwnerInput"></a>

```java
public java.lang.String getServerOwnerInput();
```

- *Type:* java.lang.String

---

##### `serverTypeInput`<sup>Optional</sup> <a name="serverTypeInput" id="@cdktf/provider-postgresql.server.Server.property.serverTypeInput"></a>

```java
public java.lang.String getServerTypeInput();
```

- *Type:* java.lang.String

---

##### `serverVersionInput`<sup>Optional</sup> <a name="serverVersionInput" id="@cdktf/provider-postgresql.server.Server.property.serverVersionInput"></a>

```java
public java.lang.String getServerVersionInput();
```

- *Type:* java.lang.String

---

##### `dropCascade`<sup>Required</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.server.Server.property.dropCascade"></a>

```java
public java.lang.Object getDropCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fdwName`<sup>Required</sup> <a name="fdwName" id="@cdktf/provider-postgresql.server.Server.property.fdwName"></a>

```java
public java.lang.String getFdwName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.server.Server.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-postgresql.server.Server.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-postgresql.server.Server.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serverOwner`<sup>Required</sup> <a name="serverOwner" id="@cdktf/provider-postgresql.server.Server.property.serverOwner"></a>

```java
public java.lang.String getServerOwner();
```

- *Type:* java.lang.String

---

##### `serverType`<sup>Required</sup> <a name="serverType" id="@cdktf/provider-postgresql.server.Server.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

---

##### `serverVersion`<sup>Required</sup> <a name="serverVersion" id="@cdktf/provider-postgresql.server.Server.property.serverVersion"></a>

```java
public java.lang.String getServerVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.server.Server.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-postgresql.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.server.ServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.postgresql.server.ServerConfig;

ServerConfig.builder()
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
    .fdwName(java.lang.String)
    .serverName(java.lang.String)
//  .dropCascade(java.lang.Boolean)
//  .dropCascade(IResolvable)
//  .id(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .serverOwner(java.lang.String)
//  .serverType(java.lang.String)
//  .serverVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.fdwName">fdwName</a></code> | <code>java.lang.String</code> | The name of the foreign-data wrapper that manages the server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | The name of the foreign server to be created. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.dropCascade">dropCascade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | This clause specifies the options for the server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverOwner">serverOwner</a></code> | <code>java.lang.String</code> | The user name of the new owner of the foreign server. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverType">serverType</a></code> | <code>java.lang.String</code> | Optional server type, potentially useful to foreign-data wrappers. |
| <code><a href="#@cdktf/provider-postgresql.server.ServerConfig.property.serverVersion">serverVersion</a></code> | <code>java.lang.String</code> | Optional server version, potentially useful to foreign-data wrappers. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.server.ServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.server.ServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-postgresql.server.ServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-postgresql.server.ServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.server.ServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.server.ServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.server.ServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fdwName`<sup>Required</sup> <a name="fdwName" id="@cdktf/provider-postgresql.server.ServerConfig.property.fdwName"></a>

```java
public java.lang.String getFdwName();
```

- *Type:* java.lang.String

The name of the foreign-data wrapper that manages the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#fdw_name Server#fdw_name}

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

The name of the foreign server to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_name Server#server_name}

---

##### `dropCascade`<sup>Optional</sup> <a name="dropCascade" id="@cdktf/provider-postgresql.server.ServerConfig.property.dropCascade"></a>

```java
public java.lang.Object getDropCascade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically drop objects that depend on the server (such as user mappings), and in turn all objects that depend on those objects.

Drop RESTRICT is the default

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#drop_cascade Server#drop_cascade}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.server.ServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-postgresql.server.ServerConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

This clause specifies the options for the server.

The options typically define the connection details of the server, but the actual names and values are dependent on the server's foreign-data wrapper

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#options Server#options}

---

##### `serverOwner`<sup>Optional</sup> <a name="serverOwner" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverOwner"></a>

```java
public java.lang.String getServerOwner();
```

- *Type:* java.lang.String

The user name of the new owner of the foreign server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_owner Server#server_owner}

---

##### `serverType`<sup>Optional</sup> <a name="serverType" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverType"></a>

```java
public java.lang.String getServerType();
```

- *Type:* java.lang.String

Optional server type, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_type Server#server_type}

---

##### `serverVersion`<sup>Optional</sup> <a name="serverVersion" id="@cdktf/provider-postgresql.server.ServerConfig.property.serverVersion"></a>

```java
public java.lang.String getServerVersion();
```

- *Type:* java.lang.String

Optional server version, potentially useful to foreign-data wrappers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/server#server_version Server#server_version}

---



