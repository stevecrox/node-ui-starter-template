%define name node-ui-starter-template
%define version 1.0.0
%define release 1
%define buildroot %(mktemp -ud %{_tmppath}/%{name}-%{version}-%{release}-XXXXXX)

Name: %{name}
Version: %{version}
Release: %{release}
Summary: node-ui-starter-template

Group: Installation Script
License: [object Object]
Source: %{name}.tar.gz
BuildRoot: %{buildroot}
Requires: nodejs
BuildRequires: nodejs
AutoReqProv: no

%description


%prep
%setup -q -c -n %{name}

%build
npm prune --production
npm rebuild

%pre
getent group node-ui-starter-template >/dev/null || groupadd -r node-ui-starter-template
getent passwd node-ui-starter-template >/dev/null || useradd -r -g node-ui-starter-template -G node-ui-starter-template -d / -s /sbin/nologin -c "node-ui-starter-template" node-ui-starter-template

%install
mkdir -p %{buildroot}/usr/lib/node-ui-starter-template
cp -r ./ %{buildroot}/usr/lib/node-ui-starter-template
mkdir -p %{buildroot}/var/log/node-ui-starter-template

%post
systemctl enable /usr/lib/node-ui-starter-template/node-ui-starter-template.service

%clean
rm -rf %{buildroot}

%files
%defattr(644, node-ui-starter-template, node-ui-starter-template, 755)
/usr/lib/node-ui-starter-template
/var/log/node-ui-starter-template
