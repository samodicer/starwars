<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-gemgreen text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/darth-vader.svg" />
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
